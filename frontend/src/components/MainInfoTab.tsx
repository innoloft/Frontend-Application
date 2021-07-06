import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { InitialRootReducer, RootActionEnums } from "../state/types";
import fakeAPIService from "../fakeAPIService";
import {
  getPasswordStrength,
  isEmailValid,
  PASSWORD_STRENGTH_ENUM,
} from "../utils/utils";
import FormField from "./shared/FormField";
import ButtonComponent from "./shared/Button";

const Form: StyledComponent<any, any> = styled.form`
  padding: 20px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

interface DefaultProps {}

interface IProps {
  email: string;
  password: string;
}

interface DispatchProps {
  updateMainInfo: (payload: IProps) => void;
  showErrorPopup: (payload: string) => void;
}

interface IState {
  loading: boolean;
  email: string;
  password: string;
  confirmPassword: string;
  passwordStrength?: number;
  passwordTip?: string;
  errors: {
    email: string;
    password: string;
    confirmPassword: string;
  };
}

class MainInfoTab extends Component<IProps & DispatchProps, IState> {
  constructor(props: IProps & DispatchProps) {
    super(props);
    this.state = {
      loading: false,
      email: props.email,
      password: props.password,
      confirmPassword: props.password,
      errors: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  isFormValid = (): boolean => {
    const { email, password, confirmPassword } = this.state.errors;
    return !(email || password || confirmPassword);
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        email: value,
        errors: {
          ...prevState.errors,
          email: !isEmailValid(value) ? "Please enter a valid email id" : "",
        },
      };
    });
  };

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const { strength, text } = getPasswordStrength(value);
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        password: value,
        passwordStrength: strength,
        passwordTip: text,
        errors: {
          ...prevState.errors,
          password:
            strength < PASSWORD_STRENGTH_ENUM.strong
              ? "Please add a strong password"
              : "",
        },
      };
    });
  };

  handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        confirmPassword: value,
        errors: {
          ...prevState.errors,
          confirmPassword:
            value !== this.state.password ? "Passwords do not match" : "",
        },
      };
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (this.isFormValid()) {
      // set loading true
      this.setState({
        loading: true,
      });
      fakeAPIService
        .updateUserMainInfo({
          email: this.state.email,
          password: this.state.password,
        })
        .then((res: any) => {
          const { email, password } = res.data;
          this.props.updateMainInfo({ email, password });
        })
        .catch((err: any) => {
          // set and show error popup
          this.props.showErrorPopup(
            err.message || "Something went wrong, please try again!"
          );
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} type={"post"}>
        <FormField
          value={this.state.email}
          name="email"
          type="email"
          label="EMail"
          placeholder={"Email@yourcompany.com"}
          errorText={this.state.errors.email}
          onChangeHandler={this.handleEmailChange}
        />
        <FormField
          value={this.state.password}
          name="password"
          type="password"
          label="Password"
          placeholder={"Password"}
          passwordStrength={this.state.passwordStrength}
          passwordTip={this.state.passwordTip}
          onChangeHandler={this.handlePasswordChange}
        />
        <FormField
          value={this.state.confirmPassword}
          name="confirmPassword"
          type="password"
          placeholder={"Confirm Password"}
          label="Confirm Password"
          errorText={this.state.errors.confirmPassword}
          onChangeHandler={this.handleConfirmPasswordChange}
        />
        <ButtonComponent disabled={!this.isFormValid()}>
          Update {this.state.loading && <AiOutlineLoading3Quarters />}
        </ButtonComponent>
      </Form>
    );
  }
}

const mapStateToProps: MapStateToProps<
  IProps,
  DefaultProps,
  InitialRootReducer
> = (state: InitialRootReducer): IProps => {
  return {
    email: state.userProfile.email,
    password: state.userProfile.password,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  DispatchProps,
  DefaultProps
> = (dispatch) => {
  return {
    updateMainInfo: (payload: IProps): any =>
      dispatch({ type: RootActionEnums.UPDATE_MAIN_INFO, payload }),
    showErrorPopup: (payload: string): any =>
      dispatch({ type: RootActionEnums.SHOW_ERROR_POPUP, payload }),
  };
};

export default connect<IProps, DispatchProps, DefaultProps, InitialRootReducer>(
  mapStateToProps,
  mapDispatchToProps
)(MainInfoTab);
