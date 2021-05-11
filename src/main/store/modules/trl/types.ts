import { FETCH_TRL_PENDING, FETCH_TRL_SUCCESS } from "./actionTypes";

export interface FetchTrlStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly trl: [];
}

export interface FetchTrlPendingActionDef {
    type: typeof FETCH_TRL_PENDING;
    payload: FetchTrlStateDef;
}

export interface FetchTrlFailureActionDef {
    type: typeof FETCH_TRL_PENDING;
    payload: FetchTrlStateDef;
}

export interface FetchTrlSuccessActionDef {
    type: typeof FETCH_TRL_SUCCESS;
    payload: FetchTrlStateDef;
}

export type FetchTrlActionTypeDefs =
    | FetchTrlPendingActionDef
    | FetchTrlFailureActionDef
    | FetchTrlSuccessActionDef;
