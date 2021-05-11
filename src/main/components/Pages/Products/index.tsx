import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfigDef, ProductDef, TrlDef } from "../../../commonTypes";
import configuration from "../../../store/modules/configuration";
import {
    fetchProductAction,
    fetchProductUpdateAction,
} from "../../../store/modules/product/actions";
import { fetchTrlAction } from "../../../store/modules/trl/actions";
import { RootState } from "../../../store/modules/types";
import { reusableMakeCall } from "../../../utilities/helpers/api";
import { DisplayMap } from "../../UI/organims/AppMap";
import { AttributesTab } from "../../UI/organims/Attributes";
import { SideNav } from "../../UI/organims/SideNav";
import "./index.css";

const PRODUCT_ID = 6781;

export const ProductsPage = () => {
    const productSelector = useSelector(
        (state: RootState) => state.fetchProductReducer
    );

    const trlSelector = useSelector(
        (state: RootState) => state.fetchTrlReducer
    );

    const [product, setProduct] = React.useState<undefined | ProductDef>(
        undefined
    );
    const [trl, setTrl] = React.useState<
        | undefined
        | Array<{
              id: string | number;
              name: string;
              description: string | null;
          }>
    >(undefined);

    const [trlValue, setTrlValue] = React.useState<undefined | string>(
        undefined
    );

    const [config, setConfig] = React.useState<undefined | ConfigDef>(
        undefined
    );

    const configSelector = useSelector((state: RootState) => {
        return state.fetchConfigurationReducer;
    });

    const [display, setDisplay] = React.useState("attribute");

    const dispatch = useDispatch();

    const handleTlr = (id: string | number) => {
        setTrlValue(String(id));
        reusableMakeCall({
            dispatch,
            requestFunc: fetchProductUpdateAction,
            method: "PUT",
            payload: { tlr: id },
            params: {},
            path: `/product/${PRODUCT_ID}/`,
        });
    };

    React.useEffect(() => {
        if (productSelector.status === "rest" && !product) {
            reusableMakeCall({
                dispatch,
                requestFunc: fetchProductAction,
                method: "GET",
                payload: {},
                params: {},
                path: `/product/${PRODUCT_ID}/`,
            });
        }

        if (productSelector.status === "fetchProductSuccess" && !product) {
            setProduct(productSelector.product);
            setTrlValue(String(productSelector.product.trl.id));
            // setCategory(productSelector.product.categories);
        }

        if (configSelector.status === "fetchConfigurationSuccess") {
            setConfig(configSelector.configuration);
        }
    }, [productSelector.status, configSelector.status]);

    React.useEffect(() => {
        if (trlSelector.status === "rest") {
            reusableMakeCall({
                dispatch,
                requestFunc: fetchTrlAction,
                method: "GET",
                payload: {},
                params: {},
                path: "/trl/",
            });
        }

        if (trlSelector.status === "fetchTrlSuccess") {
            setTrl(trlSelector.trl);
        }
    }, [trlSelector.status]);

    return (
        <article className="gdp">
            <aside className="gdp-nav">
                <SideNav />
            </aside>
            <article className="gdp-main">
                <article className="gdp-left">
                    {/* {JSON.stringify(trl)} */}
                    <figure className="gdp-prod">
                        <div className="gdp-imgcont">
                            <img
                                src={product?.picture}
                                alt=""
                                className="gdp-img"
                            />
                        </div>
                        <figcaption className="gdp-info">
                            <div className="gdp-infocont">
                                <h3 className="gdp-info-key">Title:</h3>&nbsp;
                                <p className="gdp-info-value">
                                    {product?.name}
                                </p>
                            </div>
                            <div className="gdp-infocont">
                                <h3 className="gdp-info-key">Type:</h3>&nbsp;
                                <p className="gdp-info-value">
                                    {product?.type.name}
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                    <article className="gdp-cont">
                        <div className="gdp-content-controls">
                            <button
                                className="gdp-control-button app-button"
                                onClick={() => setDisplay("description")}
                            >
                                View Description
                            </button>
                            <button
                                className="gdp-control-button app-button"
                                onClick={() => setDisplay("attribute")}
                            >
                                View Attributes
                            </button>
                        </div>
                        <section className="gdp-tabcont">
                            <div className="gdp-tabcont-left">
                                <div className="gdp-info-value gdp-value-mt">
                                    <h3 className="gdp-info-key">{display}:</h3>
                                    {display === "attribute" ? (
                                        product ? (
                                            <AttributesTab
                                                handleTlr={handleTlr}
                                                product={product}
                                                trlValue={trlValue}
                                                trl={trl}
                                                PRODUCT_ID={PRODUCT_ID}
                                            />
                                        ) : (
                                            <></>
                                        )
                                    ) : (
                                        product?.description
                                    )}
                                </div>
                            </div>
                            <div className="gdp-tabcont-right">
                                <div className="gdp-editables"></div>
                            </div>
                        </section>
                        {/* <section className="gdp-content"></section> */}
                    </article>
                </article>
                <article className="gdp-right">
                    <section className="gdp-top">
                        {config?.hasUserSection ? (
                            <div className="gdp-user">
                                <img
                                    src={product?.user.profilePicture}
                                    alt={`a picture of ${
                                        product?.user.firstName ?? ""
                                    }`}
                                    className="gdp-user-img"
                                />
                                <div className="gdp-user-name">
                                    {product?.user.firstName}{" "}
                                    {product?.user.lastName}
                                </div>
                                <div className="gdp-user-company">
                                    {product?.company.name}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </section>
                    <section className="gdp-bottom">
                        {product?.company.address.latitude !== undefined &&
                        product?.company.address.longitude !== undefined ? (
                            <DisplayMap
                                latitude={product?.company.address.latitude}
                                longitude={product?.company.address.longitude}
                            />
                        ) : (
                            <></>
                        )}
                    </section>
                </article>
            </article>
        </article>
    );
};
