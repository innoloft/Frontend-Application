import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactHtmlParser from 'react-html-parser'; 
import axios from 'axios';

let productData = null;

function Product(props){
    const [product, setProduct] = useState(null)
    const [trl, setTrl] = useState(null)
    let productJSON; //will be used to check for changes in data so that POST isn't called without changes 
    
    useEffect(() => {
        if(Object.is(product, null)){
            axios.get(`https://api-test.innoloft.com/product/6781/`).then(res => {
                
                productData = res.data;
                productJSON = JSON.stringify(res.data);
                console.log(productData.trl)
                setProduct(productData)
            }).catch(err => console.log(err))
        }

        if(Object.is(trl,null)){
            axios.get(`https://api-test.innoloft.com/trl/`).then(res => {
                
                setTrl(res.data)
            }).catch(err => console.log(err))
        }
    })
    
    function handleChange(e){
        
        if(e.target.dataset.tag === 'categories'){
            const categories = [...product.categories]
            categories[e.target.dataset.index] = {
                id: Number(e.target.id),
                name: e.target.value
            }
            setProduct({...product, categories: categories})
        } else if(e.target.dataset.tag === 'businessModels'){
            const businessModels = [...product.businessModels]
            businessModels[e.target.dataset.index] = {
                id: Number(e.target.id),
                name: e.target.value
            }
            setProduct({...product, businessModels: businessModels})
        } else {
            setProduct({...product, trl: e.target.value})
            postUpdateData()
        }
        
    }
    
    function postUpdateData(){
        if(productJSON !== JSON.stringify(product)){
            axios.post('https://api-test.innoloft.com/product/6781/', product)
          .then(res => {
            productJSON = JSON.stringify(product)  
            console.log(res.status)
            })
          .catch(err => console.log(err));
        }
        
    }


    return ( 
        <div className="max-w-screen-2xl mx-auto lg:flex">
            <div className="lg:w-1/2 mx-10">
                <div className="lg:flex flex justify-center  mt-10 p-4 rounded-md lg:border-l-8 lg:border-solid lg:border-indigo-900">
                    <img src={product?.picture} alt="product" className="hidden w-full text-center sm:w-36 lg:block rounded-full justify-center"/>
                    <div className="flex-col w-full lg:w-1/2 flex justify-center lg:ml-20 self-center">
                        <h2 className="font-bold text-center w-full text-5xl text-indigo-900">{product?.name}</h2>
                        <p className="font-semibold text-center text-2xl text-indigo-600">{product?.type.name}</p>
                    </div>
                </div>

                <Tabs >
                    <TabList className="flex justify-center font-bold text-3xl">
                        <Tab className={`text-gray-600 py-2 px-6 my-5 block  hover:text-indigo-500  focus:outline-none  text-indigo-900 border-b-2  font-bold border-blue-900`}>Description</Tab>
                        <Tab className={`text-gray-600 py-2 px-6 my-5 block  hover:text-indigo-500  focus:outline-none  text-indigo-900 border-b-2  font-bold border-blue-900`}>Attributes</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="text-xl">{ReactHtmlParser(product?.description)}</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex justify-evenly">
                            <div>
                            <h2 className="font-semibold text-2xl text-indigo-600">Categories:</h2>
                            {product?.categories.map((category,i) => {
                                
                                return(<div className="border-b-8 border-solid border-indigo-900 mt-5 pl-5 w-full">
                                    <textarea spellCheck={false} className="resize-none h-8 text-xl text-center" data-index={i} data-tag="categories" id={category.id} value={category.name} onBlur={postUpdateData} onChange={handleChange}></textarea>
                                </div>) 
                                
                            })}
                            </div>
                            <div>
                            <h2 className="font-semibold text-2xl text-indigo-600">Business models:</h2>
                            {product?.businessModels.map((businessModel,i) => {
                                
                                return(<div className="border-b-8 border-solid border-indigo-900 mt-5 pl-5 w-full">
                                    <textarea spellCheck={false} className="resize-none h-8 text-xl text-center" data-index={i} data-tag="businessModels" id={businessModel.id} value={businessModel.name} onBlur={postUpdateData} onChange={handleChange}></textarea>
                                </div>) 
                            })} 
                            </div>
                        </div>
                        <div className="justify-center">
                                <select className="w-full font-semibold bg-white border-4 border-solid border-indigo-900 rounded-xl p-2 mt-8" name="trl" value={product?.trl.name} onChange={handleChange}>
                                    {trl?.map(trl => {
                                        return(<option>{trl.name}</option>)
                                    })}
                                </select>
                            </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="w-full lg:w-1/2 flex-col">
                <div className="max-w-md flex align-center ml-5 lg:ml-0 mt-10 p-4 rounded-full border-8 border-solid border-indigo-900">
                    <img src={product?.user.profilePicture} alt="user profile picture" className="w-24 md:w-32 rounded-full"/>
                    <div className="flex-col self-center ml-5">
                    <p className="font-bold text-2xl md:text-3xl text-indigo-900">{product?.user.firstName + ' ' + product?.user.lastName}</p>
                    <p className="font-semibold text-xl md:text-2xl text-indigo-600">{product?.company.name}</p>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="font-bold text-2xl text-indigo-900 mt-10 mb-5 ml-5 lg:ml-0">Company Location: </h2>
                    <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0SunFrCnTivhedZcSrPpTopxcwoBRQLI&q=${product?.company.address.street}`}
                        className="w-full h-96 rounded-md shadow-lg"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>  
        </div>
    )
}

export default Product;