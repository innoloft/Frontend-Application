import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ product }) => {
  const user = product?.user;

  return (
    <div className='UserInfo'>
      <div className='UserInfo__title'>
        <small> Hello: {user?.firstName}</small>
      </div>
      <div className='UserInfo__company'>
        <img src={product?.company.logo} alt={product?.company.name} />
      </div>
      <div className='UserInfo__pic'>
        <img
          src={user?.profilePicture}
          alt={user?.firstName + ' ' + user?.lastName}
        />
      </div>
      <div className='UserInfo__name'>
        <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
        <small>{user?.position}</small>
        <br />
        <small>{product?.company.name}</small>
      </div>
    </div>
  );
};

export default UserInfo;
