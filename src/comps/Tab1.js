import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Tab.css';

function Tab1(props) {

  const [password, setPassword] = useState('')
  

  const [aww, setAww] = useState(false)

  const initialFieldValues = {
    
    aName: '',
    bName: '',
    email: '',
    password: '',
    hno: '',
    pco: '',
    xcountry: '',
    faddrss: '',
}

 var [values, setValues] = useState(initialFieldValues)

 const toggle = () => {
  setAww(!aww)
}

  useEffect(() => {
    if (props.currentId == '')
      setValues({ ...initialFieldValues })
    else
      setValues({
        ...props.contactObjects[props.currentId]
      })

    }, [props.currentId, props.contactObjects])


  
  
    return (
      <div className="sction">
        <div className="hadr">
          <button disabled={!aww} onClick={toggle}>Main Information</button>
          <button disabled={aww} onClick={toggle}>Additional Information</button>
      </div>


      <Formik
        initialValues={{ email: '', capassword: '', confirmPassword: '',aName: '',
        bName: '', hno: '',
        pco: '',
        xcountry: '',
        faddrss: '',  }}
       
       validationSchema={Yup.object({
         email: Yup.string().email('Invalid email address').required('Required'),
         capassword: Yup.string()
         .required('Please Enter your password')
         .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        confirmPassword: Yup
          .string()
          .required()
          .oneOf([Yup.ref("capassword"), null], "Passwords must match"),
        aName: Yup
          .string()
          .min(2, 'Too Short!')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        bName: Yup
          .string()
          .min(2, 'Too Short!')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        hno: Yup
          .number()
          .min(2, 'Too Short!')
          .max(12, 'Must be 12 characters or less')
          .required('Required'),
        pco: Yup
          .number()
          .min(2, 'Too Short!')
          .required('Required'),
        faddrss: Yup
          .string()
          .min(2, 'Too Short!')
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        xcountry: Yup
          .string()
          .required()
          .oneOf(
          ['Germany', 'Austria', 'Switzerland'],
          'Invalid Country'
        )
      })}
       onSubmit={(values, { setSubmitting }) => {
          setValues(values)
          props.addOrEdit(values)
          props.takli()
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           
           setSubmitting(false);
         },200);
       }}
     >
       
      {
        !aww ?
        (<Form className="form">
      
        <div className="outr__div">
          <div className="innr__div">
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className="form-lin" />
          </div>
          <div className="error">
          <ErrorMessage name="email" />
          </div>
        </div>
        
        <div className="outr__div">
          <div className="innr__div">
            <label htmlFor="capassword">Password</label>
            <Field name="capassword" type="password" id="password" className="form-lin" />
          </div>
          <div className="error">
            <ErrorMessage name="capassword" />
            
          </div>
          
        </div>
        
        <div className="outr__div">
          <div className="innr__div">
            <label htmlFor="confirmPassword">Password Confirm</label>
            <Field name="confirmPassword" type="password" className="form-lin" />
          </div>

          <div className="error">
            <ErrorMessage name="confirmPassword" />
          </div>
        </div>
        <button value={props.currentId == "" ? "Save" : "Update"} onClick={toggle} >Next</button>
        </Form>)
        :
        (<Form className="form">

          <div className="out__form">

            <div className="in__form">
              <div className="innr__form">
                <label htmlFor="aName">First Name</label>
                <Field name="aName" type="text" className="form-text" />
              </div>
              <div className="error">
                <ErrorMessage name="aName" />
              </div>
              
            </div>

            <div className="in__form">
              <div className="innr__form">
                <label htmlFor="bName">Last Name</label>
                <Field name="bName" type="text" className="form-text" />
              </div>
              <div className="error">
                <ErrorMessage name="bName" />
              </div>       
            </div>
          </div>
            
          
          
          <div className="out__form">
            <div className="in__form">
              <div className="innr__form">
                <label htmlFor="hno">Hosue No.</label>
                <Field name="hno" type="text"  className="form-text"/>
              </div>
              <div className="error">
                <ErrorMessage name="hno" />
              </div>
            </div>
            <div className="in__form">
              <div className="innr__form">
                <label htmlFor="pco">Postal Code</label>
                <Field name="pco" type="text"  className="form-text"/>
              </div>
              <div className="error">
                <ErrorMessage name="pco" />
              </div>
            </div>

            
          </div>

          <div className="out__form outr">
            <div className="innr__form">
              <label htmlFor="faddrss">Address</label>
              <Field name="faddrss" as="textarea"  className="form-textarea"/>
          
            </div>
            <div className="error">
                <ErrorMessage name="faddrss" />
              </div>
          </div>
          
          <div className="out__form">
            <div className="innr__form">
              <label htmlFor="xcountry">Country</label>
              <Field name="xcountry" as="select" className="my-select">
                <option value="Germany">Germany</option>
                <option value="Austria">Austria</option>
                <option value="Switzerland">Switzerland</option>
              </Field>
            </div>
          
            
            </div>
          

          <button type="submit" >Submit</button>
        </Form>)
      }
     
     </Formik>
      </div>
      
    )
}


export default Tab1
