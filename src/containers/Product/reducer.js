import produce from "immer";
import { SET_ALL_INFO } from "./constants";

// The initial state of the App
export const initialState = {
  allInfo: {},
  userInfo: {},
  picture: "",
  tabInfo: [
    { name: "Description", description: "" },
    { name: "Attributes", categories: [], businessModels: [] },
  ],
  productMainInfo: { title: "", type: "" },
  company: {},
};

const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_ALL_INFO:
        draft.allInfo = payload;
        draft.user = payload.user;
        draft.picture = payload.picture;
        draft.company = payload.company;
        draft.productMainInfo = { title: payload.name, type: payload.type };
        draft.tabInfo = [
          { name: "Description", description: payload.description },
          {
            name: "Attributes",
            categories: payload.categories,
            businessModels: payload.businessModels,
          },
        ];
        break;
      // all the user action such as login and other
      // case UPDATE_INFO:
      //   draft[payload.key] = payload.value;
      default:
        break;
    }
  });

export default productReducer;
