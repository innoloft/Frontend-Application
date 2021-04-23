import React, { Component } from 'react';

import classes from "../components/Userdetails.css";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import { strengthIndicator, strengthColor} from "./PasswordStrength";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i 
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Userdetails extends Component{
  
  pass;

    state={
        data:{
          email:"",
          password:"",
          confirmPassword:""
        },
        errors:{
          email:"",
          password:"",
          confirmPassword:"",
        } 
     }


      handleSubmit = (e) => {
           e.preventDefault();
    
         if(validateForm(this.state.errors)){
            console.log("Valid Form");
            alert("Saved Successfully!!");
          
            this.props.dispatch({
                type:actionTypes.SUBMIT_FORM
            }); 

          // clear fields
          this.setState({
            data:{
             email:"",
             password:"",
             confirmPassword:""}
          });

          }else{
            console.log("Invalid Form");
          }
        }
       

       
       handleInputChange = (event) => {
       
         let errors = this.state.errors;

         const { name , value} = event.target;

       

         switch(name){
          case 'email':
              errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
              break;
          case 'password':
              this.pass = value;
              break;
          case 'confirmPassword':
              errors.confirmPassword = (value !== this.pass) ? 'Password and Confirm Password Must be Same': '';
              break;
          default:
            break; 
         }
           this.setState({
               data:{...this.state.data, [event.target.name]: event.target.value},
               errors:{...this.state.errors}
            },
            () => this.props.dispatch({
                type:actionTypes.ACCOUNT_DATA,
                formPassData:this.state.data
            })
            
            );
       }

       

 render(){
   
   const isEnabled = this.state.data.email && 
                     (this.state.data.password  === this.state.data.confirmPassword) &&
                     (this.state.data.password.length > 7) && 
                     (this.state.data.confirmPassword.length > 7);

   const strengthPass = strengthIndicator(this.state.data.password);
   const color1 = strengthColor(strengthPass);
      
   const strengthConfirmPass = strengthIndicator(this.state.data.confirmPassword);
   const color2 = strengthColor(strengthConfirmPass);

   const { errors } = this.state;

    return (
        <div className={classes.Container }>
            <form className={classes.Form} onSubmit={this.handleSubmit}>
            <label for="email">Email</label>
            <input 
              value={this.state.data.email} 
              onChange={this.handleInputChange} 
              name="email" 
              placeholder="Enter Your Email" 
              type="email"
              noValidate
            />
            {errors.email.length > 0 && <span className={classes.error}>{errors.email}</span>}
            
            <label for="password">Password</label>
            <input 
              value={this.state.data.password} 
              onChange={this.handleInputChange} 
              name="password" 
              placeholder="password length must be greater than 7" 
              type="password"
              noValidate
              style={{borderColor:color1}}
            />

            <label for="confirmPassword">Password Confirm</label>
            <input
             value={this.state.data.confirmPassword}
             onChange={this.handleInputChange}
             name="confirmPassword"
             placeholder="confirm password length must be greater than 7"
             type="password"
             noValidate
             style={{borderColor:color2}}
             />

           {errors.confirmPassword.length > 0 && <span className={classes.error}>{errors.confirmPassword}</span>}

            <br/>
            <button type="submit" disabled={!isEnabled}>Submit</button> 
            </form>
        </div>
    )
 }

} 

const mapStateToProps = state =>{
    return{
        data: state.passwordData,
        message:state.message
    }
}

export default connect(mapStateToProps,null)(Userdetails);
