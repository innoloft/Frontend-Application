import React, { useEffect, useState } from 'react';
import Tabs from '../tabs';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
   <div className="locator">
      <i class="fas fa-map-marker-alt"></i>
      {text}
   </div>
);
const Product = () => {
   const [Product, setProduct] = useState([]);
   const [Categories, setCategories] = useState([]);
   const [Business, setBusiness] = useState([]);
   const [Company, setCompany] = useState([]);
   const [User, setUser] = useState('');
   const [Name, setName] = useState('');
   const [Name2, setName2] = useState('');
   const [latitude, setlatitude] = useState('');
   const [logitude, setlogitude] = useState('');
   const [center, setcenter] = useState({
      lat: 50.779729,
      lng: 6.100367,
   });
   const [zoom, setzoom] = useState(11);
   useEffect(() => {
      axios.get(`https://api-test.innoloft.com/product/6781/`).then((res) => {
         setProduct(res.data);
         setName(res.data.name);
         setName2(res.data.type.name);
         setCategories(res.data.categories);
         setBusiness(res.data.businessModels);
         setCompany(res.data.company);
         setUser(res.data.user);
         setlatitude(res.data.company.address.latitude);
         setcenter({
            Lat: res.data.company.address.latitude,
            lng: res.data.company.address.longitude,
         });
         setlogitude(res.data.company.address.longitude);
         console.log(res.data);
      });
   }, []);
   return (
      <div>
         <div className="productSection">
            <div>
               <div className="productImage">
                  {' '}
                  <img style={{ width: '300px' }} src={Product.picture}></img>
               </div>
               <div className="productMain">
                  <h1>{Name.name}</h1>
                  <h3>{Name2.name}</h3>
               </div>
            </div>
            <div className="user">
               <img src={User.profilePicture} className="profileImage"></img>
               <h3>
                  {User.firstName}
                  {User.lastName}
               </h3>

               <h4>{Company.name}</h4>
            </div>
         </div>{' '}
         <div className="lowerSection">
            <div className="tabs">
               <Tabs>
                  <div label="Description Tab">
                     <div className="description">{Product.description}</div>
                  </div>
                  <div label="Attributes Tab">
                     <div className="attribute">
                        <h4>Categories : </h4> {console.log(Product)}
                        {Categories.map((item) => (
                           <div>{item.name}</div>
                        ))}
                        <h4>Business Models :</h4>{' '}
                        {Business.map((item) => (
                           <div>{item.name}</div>
                        ))}
                        <a href="https://en.wikipedia.org/wiki/Technology_readiness_level">
                           Wiki Link
                        </a>
                     </div>
                  </div>
               </Tabs>
            </div>
            <div className="map">
               <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={center}
                  defaultZoom={zoom}
               >
                  <AnyReactComponent
                     lat={latitude}
                     lng={logitude}
                     text={Company.name}
                  />
               </GoogleMapReact>
            </div>
         </div>
      </div>
   );
};

export default Product;
