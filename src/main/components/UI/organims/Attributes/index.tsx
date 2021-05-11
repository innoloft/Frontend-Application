import * as React from "react";
import { useDispatch } from "react-redux";
import { ProductDef } from "../../../../commonTypes";
import { fetchProductUpdateAction } from "../../../../store/modules/product/actions";

import { reusableMakeCall } from "../../../../utilities/helpers/api";
import InputForm from "../../atoms/InputForm";
import "./index.css";

interface AttributesDef {
    trl:
        | Array<{
              id: string | number;
              name: string;
              description: string | null;
          }>
        | undefined;
    product: ProductDef | undefined;
    handleTlr: (id: string | number) => void;
    trlValue: string | undefined;
    PRODUCT_ID: number;
}

interface BasicDef {
    id: string | number;
    name: string;
}

export const AttributesTab = (props: AttributesDef) => {
    const [buisnessModel, setBuinessModel] = React.useState([
        ...props.product?.businessModels,
    ]);

    const [categories, setCategories] = React.useState([
        ...props.product?.categories,
    ]);

    const dispatch = useDispatch();

    const handleTheChange = (id: string, value: string) => {
        const mon = [];
        for (let mona of categories) {
            if (mona.id == Number(id)) {
                mon.push({ id: Number(id), name: value });
            } else {
                mon.push(mona);
            }
        }
        setCategories(mon);
        reusableMakeCall({
            dispatch,
            requestFunc: fetchProductUpdateAction,
            method: "PUT",
            payload: { product: { ...props.product, categories: mon } },
            params: {},
            path: `/product/${props.PRODUCT_ID}/`,
        });
    };

    const handleBusinessModel = (id: string, value: string) => {
        const mon = [];
        for (let model of buisnessModel) {
            if (model.id == Number(id)) {
                mon.push({ id: Number(id), name: value });
            } else {
                mon.push(model);
            }
        }
        reusableMakeCall({
            dispatch,
            requestFunc: fetchProductUpdateAction,
            method: "PUT",
            payload: { product: { ...props.product, categories: mon } },
            params: {},
            path: `/product/${props.PRODUCT_ID}/`,
        });
        setBuinessModel(mon);
    };

    return (
        <div className="">
            <div className="">
                <p className="gdp-att">Categories</p>
                <div className="gdp-editables-one">
                    {categories?.map((category) => (
                        <InputForm
                            inputType="text"
                            inputClassName="gdp-input"
                            inputName={String(category.id)}
                            inputValue={category.name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                handleTheChange(
                                    String(category.id),
                                    e.target?.value
                                )
                            }
                            key={category.id}
                        />
                    ))}
                    <input type="text" name="" id="" className="gdp-input" />
                </div>
            </div>
            <div className="">
                <p className="gdp-att">Business Models</p>
                <div className="gdp-editables-one">
                    {buisnessModel?.map((model) => (
                        <input
                            key={model.id}
                            type="text"
                            name="category"
                            id={String(model.id)}
                            className="gdp-input"
                            value={model.name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                handleBusinessModel(
                                    String(model.id),
                                    e.target?.value
                                )
                            }
                        />
                    ))}
                    <input type="text" name="" id="" className="gdp-input" />
                </div>
            </div>

            <div className="gdp-editables-two">
                {props.trl &&
                    props.trl?.map((option) => (
                        <div className="gdp-radio" key={option.id}>
                            <input
                                type="radio"
                                name="trl"
                                className="gdp-input--radio"
                                id={String(option.id)}
                                value={option.id}
                                onChange={() => props.handleTlr(option.id)}
                                checked={props.trlValue === option.id}
                            />
                            <label
                                htmlFor={String(option.id)}
                                className="gdp-input-radio--label"
                            >
                                {option.name}
                            </label>
                        </div>
                    ))}
            </div>
            <div className="gdp-editables-three">
                {/* <button className="gdp-editables-control gdp-control-button">
                    Edit
                </button> */}
            </div>
        </div>
    );
};
