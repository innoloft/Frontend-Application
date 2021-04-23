import React, {useState} from 'react'
import Attributes from '../components/Attributes'
import { useAppSelector } from '../redux/hooks'
import GoogleMapReact from 'google-map-react';

const Product: React.FC = () => {
    const [tab, setTab] = useState('decription')


    const {item} = useAppSelector(state => state.product)
    if(!item) return <div className='loader-wrapper'> <div className="loader"></div> </div>

        return (
            <div className="product-page-wrapper">
                <div className="left">
                    <div className="product-image"
                        style={{
                            background: `url(${item.picture}) no-repeat center`,
                            backgroundSize: 'contain'
                        }}
                    >
                        {/* <img src={item.picture} alt={item.name} /> */}
                    </div>
                    <div className="product-main-info">
                        <span className='product-name' >{item.name}</span> <span>|</span> <span>{item.type.name}</span>
                    </div>
                    <div className={`tab card ${tab === 'decription' ? 'active' : ''}`} onClick={() => setTab('decription')}>
                        Description
                    </div>
                    <div className={`tab card ${tab === 'attributes' ? 'active' : ''}`} onClick={() => setTab('attributes')}>
                        Attributes
                    </div>
                    <div className="tab-content card">
                        {tab === 'decription' && <p className='description' >{item.description}</p>}
                        {tab === 'attributes' && <Attributes />}
                    </div>
                </div>
                <div className="right">
                    <div className="user-info card">
                        <img src={item.user.profilePicture} alt={item.user.firstName + ' ' + item.user.lastName} />
                        <p className='name'>{item.user.firstName + ' ' + item.user.lastName}</p>
                        <p className='company'>{item.company.name}</p>
                    </div>
                    <div className="map card">
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDpud5ghO7tVnqBzFKzOSkMnjWdOlv_zTE' }}
                        defaultCenter={{
                            lat: +item.company.address.latitude,
                            lng: +item.company.address.longitude,
                        }}
                        defaultZoom={13}
                        />
                    </div>
                </div>
            </div>
        );
}


export default Product