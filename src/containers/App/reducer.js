import produce from "immer";

// The initial state of the App
export const initialState = {};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // all the user action such as login and other
      default:
        break;
    }
  });

export default appReducer;
