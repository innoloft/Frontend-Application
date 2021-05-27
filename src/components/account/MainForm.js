import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import {ConfirmPassword, Email, Password} from "../../validators/User";
import "./MainForm.scss"
import Input from "../common/Input";
import * as Yup from "yup";
import Button from "../common/Button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {dataUserActions} from "./../../redux/data/user/index";

const MainSchema = Yup.object({
    Password: Password,
    ConfirmPassword: ConfirmPassword,
    Email: Email
});

const MainForm = (props) => {
    const [strength, setStrength] = useState(0);
    const {mainInfo, dataUserActions} = props;
    useEffect(() => {
        dataUserActions.clearUpdates();
    }, []);

    const passwordCheck = (password, strength) => {
        if (password.length >= 8)
            strength++;

        let format = /[1-9]/;
        if (format.test(password))
            strength++;

        format = /[A-Z]/;
        if (format.test(password))
            strength++;

        format = /[a-z]/;
        if (format.test(password))
            strength++;

        format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(password))
            strength++;

        setStrength(strength);

    };

    const getClass = (strength) => {

        switch (strength) {
            case 1:
                return "st1";
            case 2:
                return "st2";
            case 3:
                return "st3";
            case 4:
                return "st4";
            case 5:
                return "st5";
            default:
                return "st";
        }
    };

    return (
        <Formik
            validationSchema={MainSchema}
            onSubmit={(values, {resetForm}) => {
                dataUserActions.updateMainInfo(values);
            }}
            initialValues={{
                Password: mainInfo.Password,
                ConfirmPassword: "",
                Email: mainInfo.Email,
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors
              }) => (
                <form className={"main-form"} onSubmit={handleSubmit}>
                    {mainInfo.successUpdate &&
                    <div className={"success-update"}>Main user Information updated successfully!</div>}
                    <div className={"form-row"}>
                        <Input name={"Email"} onBlur={handleBlur} onChange={handleChange} label={"Email"}
                               value={values.Email} error={errors.Email} touched={touched.Email}/>
                    </div>
                    <div className={"form-row"}>
                        <Input type={'password'} name={"Password"} onBlur={handleBlur} onChange={async (e) => {
                            handleChange(e);
                            await setStrength(0);
                            passwordCheck(values.Password, 0);
                        }}
                               label={"Password"}
                               value={values.Password} error={errors.Password} touched={touched.Password}/>

                        {!errors.Password && !!strength &&

                            <div className={"strength " + getClass(strength)}>
                                <span></span>
                            </div>}
                        <div className="password-hint">The password should be a combination of letters, numbers and special characters.</div>
                    </div>
                    <div className={"form-row"}>
                        <Input type={'password'} name={"ConfirmPassword"} onBlur={handleBlur} onChange={handleChange}
                               label={"ConfirmPassword"} value={values.ConfirmPassword} error={errors.ConfirmPassword}
                               touched={touched.ConfirmPassword}/>
                    </div>
                    <br/>
                    <div className={"form-row btn"}>
                        <Button type={"submit"}>Submit</Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

const mapStateToProps = state => {
    return {
        mainInfo: state.data.user.mainInfo

    };
};
const mapDispatchToProps = dispatch => {
    return {
        dataUserActions: bindActionCreators(dataUserActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainForm);
