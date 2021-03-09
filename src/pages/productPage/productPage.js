import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GoogleMapComp from '../../components/googleMap/googleMap';
import ListTable from '../../components/listTable/listTable';
import Loader from '../../components/loader/loader';
import ProfileCard from '../../components/userCard/userCard';
import { getProduct, getTRL } from '../../reduxStore/actions/productAction';
import './productPage.css';




const ProductPage = (props) => {

    const [product, setProduct] = useState({})
    const [tab, setTab] = useState('description')
    const [loader, setLoader] = useState(true)
    const [location, setLocation] = useState({})

    const fetchProduct = async () => {
        let res = await props.getProduct()
        let trl = await props.getTRL()
        if (res && trl) {
            let address = {
                address: `${res.company.address.house} ${res.company.address.street}`,
                lat: parseFloat(res.company.address.latitude),
                lng: parseFloat(res.company.address.longitude),
            }
            setLocation(address)
            console.log(res)
            setProduct(res)
            setLoader(false)
        }
    }
    // const location = 
    console.log(process.env.REACT_APP_APIKEY, "our location")
    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="product_page_wrapper">
            {
                loader ?
                    <Loader />
                    :
                    <>
                        <div className="product_details">
                            <div className="product_image">
                                <img src={product.picture} alt={"..."} />
                            </div>

                            <div className="product_main_info">
                                <h2>{product.name}</h2>
                                <span>({product.type.name})</span>
                            </div>
                            <div className="tab_section">
                                <div className="product_tabs">
                                    <button onClick={() => { setTab('description') }} className={`${tab === 'description' && 'active_btn'}`}>Description</button>
                                    <button onClick={() => { setTab('attributes') }} className={`${tab === 'attributes' && 'active_btn'}`}>Attributes</button>
                                </div>
                                <div className="tab_content">
                                    {
                                        tab === 'description' ?
                                            <p>
                                                {product.description}
                                            </p>
                                            : <ListTable />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="user_detail">
                            <ProfileCard userDetails={product.user} />
                            <div>
                                <GoogleMapComp location={location} zoom={11} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default connect(null, { getProduct, getTRL })(ProductPage)