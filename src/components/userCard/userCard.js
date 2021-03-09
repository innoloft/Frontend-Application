import React from 'react';
import './userCard.css';

const ProfileCard = (props) => {
    let { userDetails } = props
    console.log(userDetails)
    return (
        <div className="card_wrapper">
            <div className="user_profile_img">
                <img src={userDetails.profilePicture} alt={userDetails.firstName} />
            </div>
            <div>
                <div className="user_name">{`${userDetails.firstName} ${userDetails.lastName}`}</div>
                <div className="user_email">{userDetails.email}</div>
                <div className="user_position">{userDetails.position}</div>
            </div>
        </div>
    )
}

export default ProfileCard