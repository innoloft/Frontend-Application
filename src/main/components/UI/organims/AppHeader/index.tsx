import * as React from "react";
import { CSSProperties } from "react";
import "./index.css";
import innoLogo from "../../../../assets/images/innoLogo.svg";
import hamburger from "../../../../assets/images/hamburger.png";
import { LoadImg } from "../../atoms/LoadImg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/modules/types";
import { ConfigDef } from "../../../../commonTypes";
import { reusableMakeCall } from "../../../../utilities/helpers/api";
import { fetchConfigurationAction } from "../../../../store/modules/configuration/actions";
import { useGoogleApi } from "../../../../utilities/initMap";

const APP_ID = process.env.APP_ID;

export interface MyCustomCSS extends CSSProperties {
    "--app-default-color": string;
}

export const AppHeader: React.FC = (): JSX.Element => {
    const { alreadyDeclared } = useGoogleApi();

    const configSelector = useSelector((state: RootState) => {
        return state.fetchConfigurationReducer;
    });

    const [config, setConfig] = React.useState<undefined | ConfigDef>(
        undefined
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (configSelector.status === "rest") {
            reusableMakeCall({
                dispatch,
                requestFunc: fetchConfigurationAction,
                method: "GET",
                payload: {},
                path: `/configuration/${APP_ID ?? 1}/`,
            });
        }

        if (configSelector.status === "fetchConfigurationSuccess") {
            setConfig(configSelector.configuration);
        }
    }, [configSelector.status]);
    return (
        <section
            className="appheader"
            style={{ "--app-default-color": config?.mainColor } as MyCustomCSS}
        >
            <section className="appheader-inner">
                <section className="appheader-left">
                    <img
                        src={hamburger}
                        alt=""
                        className="appheader-hamburger"
                    />

                    <LoadImg
                        loadImg={
                            "https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
                        }
                        loadAlt="image displaying innoloft's logo"
                        loadClass="appheader-logo"
                    />
                </section>
            </section>
        </section>
    );
};
