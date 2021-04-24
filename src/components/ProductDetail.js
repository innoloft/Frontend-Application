import React, { Fragment, useState } from 'react';
import edit from '../assets/icons/edit.png';
import { updateProduct } from '../services/Product';

const ProductDetail = ({product, businessModels, trl, categories}) =>{
    const [editObj, setEditObj] = useState({});
    const [editType, seteditType] = useState("");
    const [trlEdit, setTrlEdit] = useState(false);
    const [trlSelected, setTrlSelected] = useState(product.trl);


    const setList = (list, obj, value) => {
        list.map((res)=>{
            if(res.id === obj.id){
               res.name = value; 
            }
            return res;
        })
    }

    const updateList = (type, value, obj) => {
        updateProduct()
        .then(res=>{
            if(type === "categories"){
                setList(categories, obj, value);
            }else{
                setList(businessModels, obj, value);
            }
        });
    }

    const toggleEditField = (type, obj) => {
        const fieldId =  (type==="categories")?"#cat-": "#bus-";
        const doc = document.querySelector(fieldId+obj.id);

        if(editObj && editObj.id){
            /***
             * - If previous Id match selecteed Id then hide
             *   input field and update element value.
             * 
             * - Else close previous  element field and add new field for update 
             *   in new element
             * */ 
            if(editObj.id === obj.id){
                const inputVal = document.querySelector("#input-"+editObj.id);
                if(inputVal && inputVal.value !== ""){
                    doc.innerHTML= inputVal.value;
                    updateList(type, inputVal.value, editObj);
                }else{
                    setPreviousField(editType, editObj);  
                    generateInputField(doc, obj);
                }
            }else{ 
                setPreviousField(editType, editObj);  
                generateInputField(doc, obj);
            }
            /*-------------------------------------------------------------*/ 
        }else{
            generateInputField(doc, obj);
        }
        setEditObj(obj);
        seteditType(type);
        setTrlEdit(false);
    }

    const setPreviousField = (editType, editObj) => {
        const prevfieldId = (editType==="categories")?"#cat-": "#bus-";
        const prevField = document.querySelector(prevfieldId+editObj.id);
        prevField.innerHTML = editObj.name; 
    }

    const generateInputField = (doc, obj) => {
        let innerText = doc.innerText;
        doc.innerHTML= "<input type='text' id='input-"+obj.id+"' />";
        const inputVal = document.querySelector("#input-"+obj.id);
        inputVal.value =innerText;
    }

    const selectTlr = (event) => {
        const doc = document.querySelector('#trl-field');
        if(trlEdit){
            doc.value = event.target.value;
            trl.map(res=>{
                if(event.target.value === res.id){
                    setTrlSelected(res);
                }
                return res;
            });
        }
        setTrlEdit((prev)=> !prev);
    }

    return (    
        <Fragment>
            <div className="product-container__left-section__product-tab-content__attribute-content">
                <div className="product-container__left-section__product-tab-content__attribute-content__categories">
                    <h4>Categories:</h4>
                    <ul>
                        {categories && categories.map((el, key)=>{
                            return( 
                                <li key={el.id} value={el.id}><span id={"cat-"+el.id}>{el.name}</span> <img onClick={()=>toggleEditField('categories', el)} src={edit} alt="edit" /></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="product-container__left-section__product-tab-content__attribute-content__business-modals">
                    <h4>Business Models:</h4>
                    <ul>
                        {businessModels && businessModels.map((el, key)=>{
                            return( 
                                <li key={el.id} value={el.id}><span id={"bus-"+el.id}>{el.name}</span> <img onClick={()=>toggleEditField('businessModels', el)} src={edit} alt="edit" /></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="product-container__left-section__product-tab-content__attribute-content__tlr">
                    <h4>TLR:</h4>
                    {
                        trlEdit? 
                        <select id="trl-field" onChange={(event)=>selectTlr(event)}>
                            {trl && trl.map((el, key)=>{
                                return( 
                                    <option key={key} value={el.id}  id={"tlr-"+el.id}>{el.name}</option>
                                )
                            })}
                        </select>:
                        <div className="selected-trl">
                            <span>{trlSelected && trlSelected.name}</span>
                            <img onClick={()=>selectTlr(product.trl)} src={edit} alt="edit" />
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetail;