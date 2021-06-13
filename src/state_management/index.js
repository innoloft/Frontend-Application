import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const apiCall = () => {
  return async (dispatch) => {
    try {
      const data = await fetch("https://api-test.innoloft.com/product/6781/");
      const res = await data.json();
      const obj = JSON.parse(JSON.stringify(res));

      const dataTrl = await fetch("https://api-test.innoloft.com/trl/");

      const resTrl = await dataTrl.json();
      const objTrl = JSON.parse(JSON.stringify(resTrl));

      const config = await fetch(
        "https://api-test.innoloft.com/configuration/1/"
      );
      const resConfig = await config.json();
      const objConfig = JSON.parse(JSON.stringify(resConfig));

      return dispatch({
        type: "GET_DATA",
        data: {
          data: obj,
          config: objConfig,
          trl: objTrl,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DATA":
      state = action.data;
      return action.data;

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(apiCall());
window.st = store;
