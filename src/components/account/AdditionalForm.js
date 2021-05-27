import React, {useEffect} from 'react';
import {Formik} from "formik";
import {Address, Country, LastName,FirstName} from "../../validators/User";
import "./MainForm.scss"
import Input from "../common/Input";
import * as Yup from "yup";
import Button from "../common/Button";
import {dataUserActions} from "../../redux/data/user";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Select from "../common/Select";

const MainSchema=Yup.object({
    FirstName:FirstName,
    LastName:LastName,
    Address:Address,
    Country:Country
});

const AdditionalForm = (props) => {
    const {additionalInfo, dataUserActions} = props;
    useEffect(()=>{
        dataUserActions.clearUpdates();
    },[]);

    return (
        <Formik
            validationSchema={MainSchema}
            onSubmit={(values,{resetForm}) => {
                dataUserActions.updateAdditionalInfo(values);
            }}
            initialValues={{
                FirstName:additionalInfo.FirstName,
                LastName:additionalInfo.LastName,
                Address:additionalInfo.Address,
                Country :additionalInfo.Country
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
                <form className={"main-form"}  onSubmit={handleSubmit} >
                    {additionalInfo.successUpdate&&<div className={"success-update"}>Additional user Information updated successfully!</div>}
                    <div className={"form-row"}>
                        <Input name={"FirstName"} onBlur={handleBlur} onChange={handleChange} label={"First Name"} value={values.FirstName} error={errors.FirstName} touched={touched.FirstName} />
                    </div>

                    <div className={"form-row"}>
                        <Input name={"LastName"} onBlur={handleBlur} onChange={handleChange} label={"Last Name"} value={values.LastName} error={errors.LastName} touched={touched.LastName} />
                    </div>

                    <div className={"form-row"}>
                        <Input name={"Address"} onBlur={handleBlur} onChange={handleChange} label={"Address"} value={values.Address} error={errors.Address} touched={touched.Address} />
                    </div>
                    <div className={"form-row"}>
                        <Select items={[{label:"Germany",value:"Germany"},{label:"Austria",value:"Austria"},{label:"Switzerland",value:"Switzerland"}]} name={"Country"} onBlur={handleBlur} onChange={handleChange} label={"Country"} value={values.Country} error={errors.Country} touched={touched.Country} />
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
        additionalInfo: state.data.user.additionalInfo

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
)(AdditionalForm);
