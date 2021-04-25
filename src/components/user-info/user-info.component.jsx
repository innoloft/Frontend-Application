import React from 'react';

import './user-info.styles.scss';

const UserInfo = ({ user }) => (
    <div className='user-info card'>
        <div className="picture">
            <img className="profile-pic" src={user.profilePicture} alt="profile" />
        </div>
        <div className="details">
            <p className="username">{user.firstName} {user.lastName}</p>
            <p>{user.position}</p>
            <p>Innoloft GmbH</p>
        </div>
        <div className="profile">
        </div>
    </div>
);

export default UserInfo;