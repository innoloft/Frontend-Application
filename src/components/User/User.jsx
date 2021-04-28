/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import './user.css';

const User = () => {
  const postData = useSelector(state => state.productReducer);
  return postData.loading ? (
    <div>Loading Content</div>
  ) : postData.error !== '' ? (
    <div>
      {' '}
      { postData.error }
    </div>
  ) : (
    <div className="outer-user-details-section">
      {
            Object.keys(postData.product).includes('user') ? (
              <div className="user-details-section">
                <div className="user-position-section">
                  { postData.product.user.position }
                </div>
                <div className="user-information-section">
                  <div className="left-user-information-section">
                    <div className="firstname-section">
                      <span>First Name:</span>
                      { postData.product.user.firstName }
                    </div>
                    <div className="lastname-section ">
                      <span>Last Name:</span>
                      { postData.product.user.lastName }
                    </div>
                    <div className="email-section">
                      <span>Email:</span>
                      { postData.product.user.email}
                    </div>
                    <div className="gender-section">
                      <span>Gender:</span>
                      { postData.product.user.sex === 1 ? <>Male</> : <>Female</>}
                    </div>
                  </div>
                  <div className="right-user-information-section">
                    <div className="user-profile-picture-section">
                      <img src={postData.product.user.profilePicture} alt="Profile" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loading-content">
                Loading Content !!!
              </div>
            )
        }
    </div>
  );
};

export default User;
