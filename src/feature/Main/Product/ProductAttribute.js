import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import './Product.css';
import { updateProduct } from './productSplice';
import Button from '../../../component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import Loading from '../../../component/Loading';

function ProductAttribute(props) {
  const dispatch = useDispatch();
  const trlOption = useSelector(state => state.trl.data);
  const { config, product } = props;

  const [edit, setEdit] = useState(false);
  const [updatePending, setUpdatePending] = useState(false); 
  const [categories, setCategories] = useState(product.categories);
  const [businessModels, setBusinessModels] = useState(product.businessModels);
  const [trl, setTrl] = useState(product.trl);
  const [valueCategory, setValueCategory] = useState('');
  const [valueBusinessModel, setValueBusinessModel] = useState('');

  const onUpdateProduct = async () => {
    try {
        setUpdatePending(true);
        const resultAction = await dispatch(
            updateProduct({
                ...product,
                categories: categories,
                businessModels: businessModels,
                trl: trl
            })
        );
        unwrapResult(resultAction);
    } catch (err) {
        console.error('Failed to save the post: ', err)
    } finally {
        setEdit(false);
        setUpdatePending(false);
    }
  };

  const onAddCategories = () => {
    setCategories([...categories, {name: valueCategory}]);
    setValueCategory('');
  };

  const onAddBusinessModels = () => {
    setBusinessModels([...businessModels, {name: valueBusinessModel}]);
    setValueBusinessModel('');
  };

  const onChangeTrl = (e) => {
    setTrl(trlOption.find(element => element.id === e.target.value));
  };

  return (
    <Fragment>
        {updatePending && (
            <Loading />
        )}
        {!edit && (
            <div style={{textAlign: 'right', marginBottom: props.isMobile ? '20px' : 0}}>
                <Button onClick={()=>setEdit(true)} style={{backgroundColor: config.mainColor, width: props.isMobile ? '30%' : '100px'}}><FontAwesomeIcon icon={faEdit} />&nbsp;Edit</Button>
            </div>
        )}
        <form style={{width: props.isMobile ? '100%' : '90%'}}>
            <div style={{display: 'flex'}}>
                <div style={{width: props.isMobile ? '40%' : '20%'}}>
                    Categories :
                </div>
                <div style={{width: props.isMobile ? '60%' :  '80%'}}>
                    {categories.map((item, index) => {
                        return(
                            <div key={index} className="tag" style={{backgroundColor: config.mainColor}}>
                                {item.name}
                                {edit && (
                                    <span style={{cursor:'pointer'}} onClick={()=>setCategories(categories.filter((x,i)=> i !== index))}>&nbsp;<sup>x</sup></span>
                                )}
                            </div>
                        )
                    })}
                    {edit && (
                        <div>
                            <input style={{width: props.isMobile ? '60%' : '50%'}} type="text" value={valueCategory} onChange={(e)=>setValueCategory(e.target.value)}/>
                            <Button type="button" onClick={onAddCategories} style={{backgroundColor: props.config.mainColor}}><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{width: props.isMobile ? '40%' : '20%'}}>
                    Business Models :
                </div>
                <div style={{width: props.isMobile ? '60%' :  '80%'}}>
                    {businessModels.map((item, index) => {
                        return(
                            <div key={index} className="tag" style={{backgroundColor: config.mainColor}}>
                                {item.name}
                                {edit && (
                                    <span style={{cursor:'pointer'}} onClick={()=>setBusinessModels(businessModels.filter((x,i)=> i !== index))}>&nbsp;<sup>x</sup></span>
                                )}
                            </div>
                        )
                    })}
                    {edit && (
                        <div>
                            <input style={{width: props.isMobile ? '60%' : '50%'}} type="text" value={valueBusinessModel} onChange={(e)=>setValueBusinessModel(e.target.value)}/>
                            <Button type="button" onClick={onAddBusinessModels} style={{backgroundColor: props.config.mainColor}}><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{width: props.isMobile ? '40%' : '20%'}}>
                    TRL :
                </div>
                <div style={{width: props.isMobile ? '60%' :  '80%'}}>
                    {edit && trlOption && trlOption.map((item, index) => {
                        return(
                            <div key={index}>
                                <input type="radio" id={index} name="trl" value={item.id} checked={item.id == trl.id} onChange={onChangeTrl}/>
                                <label>{item.name}</label><br/>
                            </div>
                        )
                    })}
                    {!edit && (
                        <div>{trl.name}</div>
                        
                    )}
                </div>
            </div>
            <br/>
            {edit && (
                <div style={{textAlign: 'right'}}>
                    <Button type="button" onClick={onUpdateProduct} style={{backgroundColor: props.config.mainColor, width: props.isMobile ? '100%' : '100px'}}><FontAwesomeIcon icon={faSave} />&nbsp;Save</Button>
                </div>
            )}
        </form>
    </Fragment>
  );
}

export default ProductAttribute;
