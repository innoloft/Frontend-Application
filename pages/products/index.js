import React, {useState, useEffect, useCallback} from 'react';
import styles from '../../styles/Products.module.scss'
import PropTypes, {object} from 'prop-types';
import {getConfig, getProduct} from "../../redux/actions/data-action";
import {connect} from "react-redux";
import {FaBriefcase, FaBuilding, FaUser} from "react-icons/fa";
import Switch from "react-switch";
import MoonLoader from "react-spinners/MoonLoader";
import {css} from "@emotion/react";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #272e71;
`;
const containerStyle = {

    width: '100%',
    height: '100%'
};


const Loader = () => {
    return <MoonLoader color={'#272e71'} loading={true} css={override} size={30}/>
}

const Products = (props) => {
    const {getProduct, getConfig} = props
    // const {data: {picture, name}} = props.data
    const {loading, configLoading, data, configuration} = props.data

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        getConfig(checked ? '1' : '2')
    };

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCmJ8mlmZyE-Wpt8ZrobB1q5aFFAsf_U0w"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const [tabSwitch, setTabSwitch] = useState(false);


    const getProductDetails = useCallback(() => {
        getProduct()
    }, [])

    useEffect(() => {
        getProductDetails()

        console.log(props.data)
    }, [])

    /*    const {picture, name} = data*/
    return (
        <div className={styles.productPage}>
            <div className={styles.centerBox}>
                <section className={styles.productImage}>

                    {
                        loading ? <Loader/> : data && <img src={data.picture} alt='product'/>
                    }

                </section>
                <section className={styles.productMainInfo}>
                    {
                        loading ? <Loader/> :
                            data && <div className={styles.type}><span>Title:</span> {data.name}</div>
                    }
                    {
                        loading ? <Loader/> :
                            data && <div className={styles.type}><span>Type:</span> {data.type.name}</div>
                    }
                </section>
                <section className={styles.tabs}>
                    <div className={styles.tabBtnWrap}>
                        <button className={`${!tabSwitch && styles.active} `}
                                onClick={() => setTabSwitch(prevState => !prevState)} disabled={!tabSwitch}>
                            Description
                        </button>
                        <button className={`${tabSwitch && styles.active} `}
                                onClick={() => setTabSwitch(prevState => !prevState)} disabled={tabSwitch}>
                            Attributes
                        </button>

                    </div>

                    <div className={styles.tabContent}>
                        {
                            !tabSwitch ? <div className={styles.Description}>


                                    {
                                        loading ? <Loader/> :
                                            data && <p>{data.description}</p>
                                    }

                                </div> :
                                <div className={styles.Attributes}>
                                    <ul>
                                        <span>Categories</span>
                                        {
                                            loading ? <Loader/> :
                                                data &&
                                                data.categories.map((({name}, index) => (
                                                    <li key={index}>
                                                        {
                                                            name
                                                        }
                                                    </li>
                                                )))
                                        }

                                    </ul>
                                    <ul>
                                        <span>BusinessModels</span>
                                        {
                                            loading ? <div>Loading...</div> :
                                                data &&
                                                data.businessModels.map((({name}, index) => (
                                                    <li key={index}>
                                                        {
                                                            name
                                                        }
                                                    </li>
                                                )))
                                        }

                                    </ul>
                                    <ul>
                                        <span>TRL</span>
                                        {
                                            loading ? <Loader/> :
                                                data &&
                                                <li>

                                                    {
                                                        data.trl.name
                                                    }
                                                </li>

                                        }

                                    </ul>
                                </div>
                        }
                    </div>
                </section>
            </div>
            <div className={styles.rightBox}>
                <label>
                    <small>Switch app configuration</small>
                    <Switch
                        onChange={handleChange}
                        checked={checked}
                        className="react-switch"
                    />
                </label>

                <section className={styles.userInfo}>
                    <div className={styles.userImage}>

                        {
                            loading ? <Loader/> :
                                data && <img src={data.user.profilePicture} alt='user'/>
                        }
                    </div>
                    <div className={styles.username}>
                        {
                            loading ? <Loader/> :
                                data && <div className=''><FaUser/> {data.user.firstName} {data.user.lastName}</div>
                        }
                    </div>
                    <div className={styles.company}>

                        {
                            loading ? <Loader/> :
                                data && <div className=''><FaBuilding/> {data.company.name}</div>
                        }
                    </div>
                    <span className={styles.userPosition}>
                        {
                            loading ? <Loader/> :
                                data && <div className=''><FaBriefcase/> {data.user.position}</div>
                        }
                    </span>
                </section>


                <section className={styles.maps}>
                    {
                        data && isLoaded ?
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={
                                    {
                                        lat: data.company.latitude,
                                        lng: data.company.longitude,
                                    }
                                }
                                zoom={1}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>

                            </GoogleMap> : <Loader/>
                    }
                </section>

            </div>
        </div>
    );
};

Products.propTypes = {
    getProduct: PropTypes.func.isRequired,
    getConfig: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapActionsToDispatch = {
    getProduct,
    getConfig
}

const mapStateToProps = (state) => ({
    data: state.data
})


export default connect(mapStateToProps, mapActionsToDispatch)(Products);
