import * as actionTypes from './actions';

const initialState = {
    userData:{
    },
    AccountData:{  
    },
    message:"",
    infoMessage:""
}

const reducer = (state = initialState,action)=>{
     switch(action.type){
        case actionTypes.ACCOUNT_DATA:
              return{
              ...state,
              AccountData:{
               ...state.AccountData,
              AccountData: action.formPassData  
             }
            }
        case actionTypes.SUBMIT_FORM:
            console.log("Account From reducer",state.AccountData);
            return{
            ...state,
            message:"Account Form Submitted!!!"
            }
        case actionTypes.INFO_DATA:
            return{
                ...state,
                userData:{
                  ...state.userData,
                  userData: action.userFormData
                }
              }
        case actionTypes.INFO_MESSAGE:
          console.log("Info From reducer", state.userData);
             return{
             ...state,
             infoMessage:"Info Form Submitted!!"
             } 
        default:
            return state;
     }
};

export default reducer;