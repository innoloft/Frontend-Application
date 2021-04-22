import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadProduct, errorProduct, loadTrl, errorTrl, updateCategory, updateBusinessModel, updateTrl, saveAttributes, errorAttributes, switchTo} from '../actions';
import spinner from './spinner.svg';
import './product.css';

function Product() {
    
    const dispatch = useDispatch();
    const axios = require('axios');
    const product = useSelector(state => state.product);
    const switcher = useSelector(state => state.switchTo);
    const save = useSelector(state => state.save);
    const trl = useSelector(state => state.trl);
    
    useEffect(() => {
        axios.get("https://api-test.innoloft.com/product/6781/")
        .then(response => dispatch(loadProduct(response.data)))
        .catch(error => dispatch(errorProduct(error)));
    }, [dispatch, axios]);

    useEffect(() => {
        axios.get("https://api-test.innoloft.com/trl/")
        .then(response => dispatch(loadTrl(response.data)))
        .catch(error => dispatch(errorTrl(error)));
    }, [dispatch, axios]);

    return(
        <>{product.type
        ?
        <div id="product">
            <div id="half-one">
                <div id="first-wrapper">
                    <div id="product-image">
                        <img src={product.picture} alt=""></img>
                    </div>
                    <div id="main-info">
                        <h1>{product.name}</h1>
                        <span>{product.type.name}</span>
                    </div>
                </div>
                <div id="second-wrapper">
                    <div id="tab-select">
                        <div id="select-description" className={switcher !== 'desc' ? 'button inactive' : 'button'} onClick={() => dispatch(switchTo('desc'))}>DESCRIPTION</div>
                        <div id="select-attributes" className={switcher !== 'attr' ? 'button inactive' : 'button'} onClick={() => dispatch(switchTo('attr'))}>ATTRIBUTES</div>
                    </div>
                    <div id="tab-content">
                        {switcher === 'desc'
                        ? 
                        <div dangerouslySetInnerHTML={{__html: product.description}} id="content-description"></div>
                        :
                        <div id="content-attributes">
                            <div id="attributes">
                                <div id="categories">
                                    <span>CATEGORIES</span>
                                    {product.categories.map(category => <input className="category" key={category.id} value={category.name} onChange={target => {
                                        const newCategories = product.categories.map(element => element.id === category.id ? {...element, name: target.target.value} : element);
                                        dispatch(updateCategory({...product, categories: [...newCategories]}));
                                    }}/>)}
                                </div>
                                <div id="business-models">
                                    <span>BUSINESS MODELS</span>
                                    {product.businessModels.map(model => <input className="business-model" key={model.id} value={model.name} onChange={target => {
                                        const newModels = product.businessModels.map(element => element.id === model.id ? {...element, name: target.target.value} : element);
                                        dispatch(updateBusinessModel({...product, businessModels: [...newModels]}));
                                    }}/>)}
                                </div>
                                <div id="trl">
                                    <span>TRL</span>
                                    <select value={product.trl.id} onChange={target => {
                                        const newTrl = {id: parseInt(target.target.value), name: trl.find((element) => element.id === target.target.value).name};
                                        dispatch(updateTrl({...product, trl: {...newTrl}}));
                                    }}>
                                        {trl.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <button id="save" className={save ? 'button inactive' : 'button'} onClick={() => {
                                axios.put("https://api-test.innoloft.com/product/6781/", {...product})
                                .then(() => dispatch(saveAttributes()))
                                .catch(() => dispatch(errorAttributes()));
                            }}>{save ? 'SAVED' : 'SAVE'}</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div id="half-two">
                <div id="third-wrapper">
                    <div id="user-info">
                        <div id="user-picture">
                            <img src={product.user.profilePicture} alt=""></img>
                        </div>
                        <div id="user-details">
                            <p>{product.user.firstName} {product.user.lastName}</p>
                            <span>{product.company.name}</span>
                        </div>
                    </div>
                    <div id="map">
                        <iframe frameBorder="0" scrolling="no" title="map" style={{backgroundImage: `url("${spinner}")`, color: "blue"}}
                        src={`https://maps.google.com/maps?q=${product.company.address.latitude}, ${product.company.address.longitude}&output=embed`}></iframe>
                    </div>
                </div>
            </div>
        </div> 
        :
        <img id="spinner" src={spinner} alt=""></img>
        }</>
    );
}

export default Product;



