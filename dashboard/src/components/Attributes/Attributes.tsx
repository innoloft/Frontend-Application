import React, { MouseEventHandler, useEffect, useState } from 'react';
import { CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl } from '../../types/Product';
import {UpdatebleInput} from '../../components/UpdatebleInput/UpdatebleInput';
import { TrlSelector } from './TrlSelector';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchTrlList, selectTrl } from '../../features/product/trlSlice';
import { Trl } from '../../types/Trl';
import { selectProduct, updateProduct } from '../../features/product/productSlice';

interface AttributesProps{
    categories: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl[]
    businessModels: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl[]
    trl: Trl
}

export const Attributes: React.FC<AttributesProps> = props => {
    const [categories, setCategories] = useState(props.categories)
    const [businessModels, setBusinessModels] = useState(props.businessModels)
    const [trl, setTrl] = useState<Trl>(props.trl)
    
    const dispatch = useDispatch()
    const trlValues = useSelector(selectTrl)
    const status = useSelector((state: RootState) => state.trl.status)
    const product = useSelector(selectProduct)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTrlList())
        }
    }, [status, dispatch])

    const handleUpdate:MouseEventHandler<HTMLButtonElement> = e => {
        // put the data
        e.preventDefault()
        const data = {
            productId: 6781,
            payload: {
                ...product,
                trl,
                categories,
                businessModels
            }
        }
        dispatch(updateProduct(data))
    }

    return (
        <form>
            <div className="attributes">
                <div className="attr-card">
                    <h2>Categories</h2>
                    {categories && categories.map(category => {
                        return <UpdatebleInput 
                                key={category.id} 
                                item={category}
                                setItem={setCategories}/>
                    })}
                </div>
                <div className="attr-card">
                    <h2>BusinessModels</h2>
                    {businessModels && businessModels.map(businessModel => {
                        return <UpdatebleInput 
                                key={businessModel.id} 
                                item={businessModel} 
                                setItem={setBusinessModels}
                                />
                    })}
                </div>
                <div className="attr-card">
                    <h2>TRL Value</h2>
                    {
                        status === 'succeeded' &&
                        <TrlSelector trlValues={trlValues} trl={trl} setTrl={setTrl}/>
                    }
                </div>
                <button 
                    type="submit" 
                    className="primary"
                    onClick={handleUpdate}
                    >
                    Update
                </button>
            </div>
        </form>
    )
} 