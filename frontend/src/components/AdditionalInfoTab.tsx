import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Countries,
  InitialRootReducer,
  RootActionEnums,
  UserAdditonalInfo,
} from "../state/types";import fakeAPIService from "../fakeAPIService";
import { CountryOptionList, isEmptyField } from "../utils/utils";
import FormField from "./shared/FormField";
import ButtonComponent from "./shared/Button";

const Form: StyledComponent<any, any> = styled.form`
  padding: 20px;
`;

interface DefaultProps {}

interface IProps {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  country: Countries;
}

interface DispatchProps {
  updateAdditionalInfo: (payload: UserAdditonalInfo) => void;
  showErrorPopup: (payload: string) => void;
}

interface IState extends IProps {
  loading: boolean;
  errors: {
    firstName: string;
    lastName: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    country: string;
  };
}

class AdditionalInfoTab extends Component<IProps & DispatchProps, IState> {
  constructor(props: IProps & DispatchProps) {
    super(props);
    this.state = {
      loading: false,
      firstName: props.firstName,
      lastName: props.lastName,
      street: props.street,
      houseNumber: props.houseNumber,
      postalCode: props.postalCode,
      country: props.country,
      errors: {
        firstName: "",
        lastName: "",
        street: "",
        houseNumber: "",
        postalCode: "",
        country: "",
      },
    };
  }

  isFormValid = (): boolean => {
    const {
      firstName,
      lastName,
      street,
      houseNumber,
      postalCode,
      country,
    } = this.state.errors;
    return !(
      firstName ||
      lastName ||
      street ||
      houseNumber ||
      postalCode ||
      country
    );
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    this.setState((prevState: IState) => {
      return {
        ...prevState,
        [name]: value,
        errors: {
          ...prevState.errors,
          [name]: isEmptyField(value)
            ? `Please fill in the value for ${name}`
            : "",
        },
      };
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.setState({
        loading: true,
      });
      fakeAPIService
        .updateUserAdditionalInfo({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: {
            street: this.state.street,
            houseNumber: this.state.houseNumber,
            postalCode: this.state.postalCode,
          },
          country: this.state.country,
        })
        .then((res: any) => {
          const { firstName, lastName, address, country } = res.data;
          this.props.updateAdditionalInfo({
            firstName,
            lastName,
            address,
            country,
          });
          // setLoading false
        })
        .catch((err: any) => {
          // set error message
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
      <Form onSubmit={this.handleSubmit}>
        <FormField
          value={this.state.firstName}
          name="firstName"
          type="text"
          label="First Name"
          placeholder={"First Name"}
          errorText={this.state.errors.firstName}
          onChangeHandler={this.handleChange}
        />
        <FormField
          value={this.state.lastName}
          name="lastName"
          type="text"
          label="Last Name"
          placeholder={"Last Name"}
          errorText={this.state.errors.lastName}
          onChangeHandler={this.handleChange}
        />
        <FormField
          value={this.state.street}
          name="street"
          type="text"
          label="Street"
          placeholder={"Street"}
          errorText={this.state.errors.street}
          onChangeHandler={this.handleChange}
        />
        <FormField
          value={this.state.houseNumber}
          name="houseNumber"
          type="text"
          label="House Number"
          placeholder={"House Number"}
          errorText={this.state.errors.houseNumber}
          onChangeHandler={this.handleChange}
        />
        <FormField
          value={this.state.postalCode}
          name="postalCode"
          type="text"
          label="Postal Code"
          placeholder={"Postal Code"}
          errorText={this.state.errors.postalCode}
          onChangeHandler={this.handleChange}
        />
        <FormField
          value={this.state.country}
          name="country"
          type="select"
          label="Country"
          options={CountryOptionList}
          placeholder={"Postal Code"}
          errorText={this.state.errors.postalCode}
          onChangeHandler={this.handleChange}
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
> = (state) => {
  return {
    firstName: state.userProfile.firstName,
    lastName: state.userProfile.lastName,
    street: state.userProfile.address.street,
    houseNumber: state.userProfile.address.houseNumber,
    postalCode: state.userProfile.address.postalCode,
    country: state.userProfile.country,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  DispatchProps,
  DefaultProps
> = (dispatch) => {
  return {
    updateAdditionalInfo: (payload: UserAdditonalInfo): any =>
      dispatch({ type: RootActionEnums.UPDATE_ADDITIONAL_INFO, payload }),
    showErrorPopup: (payload: string): any =>
      dispatch({ type: RootActionEnums.SHOW_ERROR_POPUP, payload }),
  };
};

export default connect<IProps, DispatchProps, DefaultProps, InitialRootReducer>(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalInfoTab);
