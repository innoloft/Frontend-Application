import {
    FETCH_CONFIGURATION_FAILURE,
    FETCH_CONFIGURATION_PENDING,
    FETCH_CONFIGURATION_SUCCESS,
} from "./actionTypes";

export interface FetchConfigrationStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly configuration: Object;
}

export interface FetchConfigurationPendingActionDef {
    type: typeof FETCH_CONFIGURATION_PENDING;
    payload: FetchConfigrationStateDef;
}

export interface FetchConfigurationSuccessActionDef {
    type: typeof FETCH_CONFIGURATION_SUCCESS;
    payload: FetchConfigrationStateDef;
}

export interface FetchConfigurationFailureActionDef {
    type: typeof FETCH_CONFIGURATION_FAILURE;
    payload: FetchConfigrationStateDef;
}

export type FetchConfigurationActionTypeDefs =
    | FetchConfigurationPendingActionDef
    | FetchConfigurationSuccessActionDef
    | FetchConfigurationFailureActionDef;
