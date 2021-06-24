import React from 'react'

const Info = ({product}) => {
  return (
    <div className="info">
      <div className="info__user">
        <div className="profile">
          <img src={product.user && product.user.profilePicture} alt="profile"/>
        </div>
        <div className="profile">
          <div><span>user name: </span><span>{product.user && `${product.user.firstName} ${product.user.lastName}`}</span></div>
          <div><span>user company: </span><span>{product.company && product.company.name}</span></div>
        </div>
      </div>
      <div className="map__info">
        <h1>Map Info</h1>
      </div>
    </div>
  )
}

export default Info