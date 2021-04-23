import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateTRL,updateCategories,updateBusinessModels, putProduct } from '../redux/productSlice';

const Attributes: React.FC = () => {
    const dispatch = useAppDispatch()
    const {item: product} = useAppSelector(state => state.product)
    const {item: trl} = useAppSelector(state => state.trl)
    
    const [isEdit, setIsEdit] = useState<boolean>(false)
    // const [categoriesState, setcategoriesState] = useState<string>('')
    // const [businessModelsState, setbusinessModelsState] = useState<string>('')
    // const [TRLState, setTRLState] = useState<TRLProps | null>(null)

    // useEffect(() => {
    //     if(product){
    //         setcategoriesState(product.categories.map(({name}) => name).join(', '))
    //         setbusinessModelsState(product.businessModels.map(({name}) => name).join(', '))
    //         setTRLState(product.trl)
    //     }
    //     else{
    //         setcategoriesState('')
    //         setbusinessModelsState('')
    //         setTRLState(null)
    //     }
    //     return () => {
    //         setcategoriesState('')
    //         setbusinessModelsState('')
    //         setTRLState(null)
    //     }
    // }, [product])


    const handleTRLSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(trl) {
            const filteredTRL = trl.filter( item => {
                if(item.name === event.target.value){
                    return {
                        item
                    }
                }
                return null
            } )
            dispatch(updateTRL(filteredTRL[0]))
        }
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const categoriesState = event.target.value
        const categories = categoriesState.split(', ').map((category, index) => ({
            id: index+1,
            name: category
        }))
        dispatch(updateCategories(categories))
    }
    const handleBusinessModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const businessModelsState = event.target.value
        const businessModels = businessModelsState.split(', ').map((businessModel, index) => ({
            id: index+1,
            name: businessModel
        }))
        dispatch(updateBusinessModels(businessModels))
    }


    const saveChanges = () => {
        dispatch(putProduct())
        setIsEdit(false)
    }



    if(!product || !trl) return <div/>
        return (
            <div className='attributes-tab'>
                {isEdit 
                    ? (
                        <div className='attributes-container' >
                            <div className="att-rows">
                                <p>Categories</p>
                                <input type='text' aria-label='category-input' defaultValue={product.categories.map(({name}) => name).join(', ')} onChange={handleCategoryChange} />
                                <small>Please add comma to seperate each tag.</small>

                            </div>
                           
                           <div className="att-rows">
                                <p>Business Models</p>
                                <input type='text' aria-label='category-input' defaultValue={product.businessModels.map(({name}) => name).join(', ')} onChange={handleBusinessModelChange} />
                                <small>Please add comma to seperate each tag.</small>
                           </div>
                            
                            <div className="att-rows">
                                <p>Technology readiness level</p>
                                <select defaultValue={product.trl.name} onChange={ handleTRLSelect } >
                                    {trl.map(({name, id}) =>  <option key={id} value={name}>{name}</option>)}
                                </select>
                            </div>
                           
                            <div className='edit-btn'><span onClick={saveChanges} >Save</span><span onClick={() => setIsEdit(false)}>Cancel</span></div>
                        </div>
                    )
                    : (
                        <div className='attributes-container' >
                            <div className="">
                                <p>Categories</p>
                                <ul className='attributes-wrapper'>
                                    {product.categories.map( ({name, id}) => <li key={id} className='attribute' >#{name}</li> )}
                                </ul>
                            </div>
                           
                           <div className="">
                            <p>Business Models</p>
                                <ul className='attributes-wrapper'>
                                    {product.businessModels.map( ({name, id}) => <li key={id} className='attribute' >#{name}</li> )}
                                </ul>
                           </div>
                            
                            <div className="">
                                <p>Technology readiness level</p>
                                <ul className='attributes-wrapper'>
                                    <li className='attribute' >{product.trl.name}</li>
                                </ul>
                            </div>
                           
                            <div className='edit-btn'><span onClick={() => setIsEdit(true)} >Edit</span></div>
                        </div>
                    )      
                }




            </div>
        );
}


export default Attributes