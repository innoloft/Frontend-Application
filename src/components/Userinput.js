import React ,{Component} from 'react';

import classes from "../components/Userinput.css";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class Userinput extends Component{

    state={
        data:{
         firstName:"",
         lastName:"",
         address:"",
         country:""
        },
        errors:{
         firstName:"",
         lastName:"",
         address:"",
         country:""
        }
    }

    handleSubmit = (event) => {
       event.preventDefault();

       if(validateForm(this.state.errors)){
           console.log("Valid form");
           alert("Saved Successfully!!");

           this.props.dispatch({
            type:actionTypes.INFO_MESSAGE
           });

        // clear fileds
        this.setState({
            data:{
                firstName:"",
                lastName:"",
                address:"",
                country:""            
            }
        });

       }else{
           console.log("Invalid Form");
       }
      
    }

    handleInputChange = (event) => {

        let errors = this.state.errors;

        const { name , value} = event.target;

        
        switch(name){
            case 'firstName':
                errors.firstName = value.length < 2 ? "First Name must be at least 2 characters long!" : '';
                break;
            case 'lastName':
                errors.lastName = value.length < 2 ? "Last Name must be at least 2 characters long!" : '';
                break;
            case 'address':
                errors.address = value.length < 6 ? "Address must be at least 6 characters long!": '';
                break;
            case 'country':
                errors.country = value.length < 1 ? " Please enter a country name":'';
                break;
            default:
                break;
            }


        this.setState({
            data:{...this.state.data, [name]: value},
            errors:{...this.state.errors}
         },
         () => this.props.dispatch({
             type:actionTypes.INFO_DATA,
             userFormData: this.state.data
         })
         );

    }

    render(){

        const { errors } = this.state;
        const isEnabled = this.state.data.firstName.length >= 2 && 
                          this.state.data.lastName.length >= 2  &&
                          this.state.data.address.length >= 6 &&
                          this.state.data.country;
            

      return (
            <div className={classes.Container }>

            <form className={classes.Form} onSubmit={this.handleSubmit}>
            <label for="firstName">First Name</label>
            <input 
               value={this.state.data.firstName} 
               onChange={this.handleInputChange} 
               name="firstName" 
               placeholder="FirstName"
               type="text" 
               noValidate/>
            { (errors.firstName.length > 0 ) && <span className={classes.error}>{errors.firstName}</span>}
            <label for="lastName">Last Name</label>
            <input 
               value={this.state.data.lastName} 
               onChange={this.handleInputChange} 
               name="lastName"
               placeholder="LastName" 
               type="text"
               noValidate />
            {errors.lastName.length > 0 && <span className={classes.error}>{errors.lastName}</span>}

            <label for="address">Address</label>
            <input 
               value={this.state.data.address} 
               onChange={this.handleInputChange} 
               name="address" 
               placeholder="Address" 
               type="text"
               noValidate />
            {errors.address.length > 0 && <span className={classes.error}>{errors.address}</span>}

            <label for="country">Country</label>
            <select name="country" onChange={this.handleInputChange} value={this.state.data.country} noValidate>
            <option value="germany">Germany</option>
            <option value="australia">Australia</option>
            <option value="switzerland">Switzerland</option>
            </select>
            {errors.country.length > 0 && <span className={classes.error}>{errors.country}</span>}
             <br/>

            <button type="submit" disabled={!isEnabled}>Submit</button>

            </form>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return{
      data:state.userData,
      message:state.infoMessage
    }
}

export default connect(mapStateToProps,null)(Userinput);
