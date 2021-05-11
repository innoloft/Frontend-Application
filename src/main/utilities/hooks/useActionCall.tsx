import { ForAxiosDefs } from "../../commonTypes";

interface MakeCallDef {
    dispatch: any;
    requestFunc: (props: {
        path: string;
        payload: {};
        method: ForAxiosDefs;
        params?: {};
    }) => void;
    method: ForAxiosDefs;
    path: string;
    payload: {};
    params?: {};
}

export const useActionCall = async (props: MakeCallDef) => {
    await props.dispatch(
        props.requestFunc({
            path: props.path,
            method: props.method,
            payload: props.payload,
            params: props.params ?? {},
        })
    );
};
