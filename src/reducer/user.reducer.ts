import { InitUserAccountState, InitUserProfileState, InitUserState } from "../inital.state/user.initial.state";
import { UserType } from "../types";
import { ActionTypes } from "../actions/action.types";
import { DeepCopyObj } from "../utills";

const { USER_TYPES: {
  SET_USER_ACCOUNT_SETTING,
  SET_USER_INFORMATION,
  CLEAR_USER_ACCOUNT_SETTING,
  CLEAR_USER_INFORMATION } } = ActionTypes;

const INITIAL_STATE: UserType = { ...DeepCopyObj(InitUserState) }

export default (
  state = INITIAL_STATE,
  action: { type: string; payload?: any }
): UserType => {
  switch (action.type) {
    case SET_USER_ACCOUNT_SETTING:
      return { ...state, account: action.payload };

    case SET_USER_INFORMATION:
      return { ...state, profile: action.payload };

    case CLEAR_USER_ACCOUNT_SETTING:
      return { ...state, account: InitUserAccountState };
    case CLEAR_USER_INFORMATION:
      return { ...state, profile: { ...DeepCopyObj(InitUserProfileState) } };

    default:
      return state;
  }
};
