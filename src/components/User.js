import React from 'react'
import Card from './Card'
import Image from './Image'

const User = ({ product }) => {

    return (
        < div className="user" >
            <Card>
                <Image src={product?.user?.profilePicture} />
                <h3><b>{product?.user?.firstName + ' ' + product?.user?.lastName}</b></h3>
                <h3>{product?.user?.position}</h3>
            </Card>
        </div>
    )

}
export default User
