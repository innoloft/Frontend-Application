import { USER_INITIAL_DATA } from "../constants";

const defaultState = {
  id: null,
  firstName: "",
  lastName: "",
  profilePicture: "",
  company: {},
};

export const setInitialUserData = ({
  id,
  firstName,
  lastName,
  profilePicture,
  company,
}) => ({
  type: USER_INITIAL_DATA,
  payload: {
    id,
    firstName,
    lastName,
    profilePicture,
    company,
  },
});

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_INITIAL_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default userReducer;
