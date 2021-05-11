import {
    FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
} from "./actionTypes";

export interface FetchProductStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly product: Object;
}

export interface FetchProductPendingActionDef {
    type: typeof FETCH_PRODUCT_PENDING;
    payload: FetchProductStateDef;
}

export interface FetchProductSuccessActionDef {
    type: typeof FETCH_PRODUCT_SUCCESS;
    payload: FetchProductStateDef;
}

export interface FetchProductFailureActionDef {
    type: typeof FETCH_PRODUCT_FAILURE;
    payload: FetchProductStateDef;
}

export type FetchProductActionTypeDefs =
    | FetchProductPendingActionDef
    | FetchProductSuccessActionDef
    | FetchProductFailureActionDef;
