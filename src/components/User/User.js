import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import { Profile, UserInfo, Map } from './User.styled';

function User() {
  const product = useSelector(s => s.product);

  if (!product.user) return <div>Loading</div>;

  const { user, company } = product;

  return (
    <UserInfo>
      <Profile>
        <img src={user?.profilePicture} alt="Profile" />
        <p>{`${user?.firstName} ${user?.lastName}`}</p>
        <p>{company.name}</p>
      </Profile>
      <Map>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDBcb08VXeerj-DiA_3ILqXxI1Hj_dmqKc' }}
          defaultCenter={{
              lat: +company?.address.latitude,
              lng: +company?.address.longitude,
          }}
          defaultZoom={13}
        />
      </Map>
    </UserInfo>
  );
}

export default User;
