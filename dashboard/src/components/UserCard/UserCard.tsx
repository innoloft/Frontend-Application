import React from 'react';
import { User } from '../../types/Product';


interface UserCardProps{
    user: User
}

export const UserCard: React.FC<UserCardProps> = props => {
    return (
        <div className="user-card">
            <div className="user-image">
                <img src={props.user.profilePicture} alt=""/>
            </div>
            <div className="user-info">
                <span>{props.user.firstName} {props.user.lastName}</span>
                <p>{props.user.position}</p>
                <p>{props.user.email}</p>
            </div>
        </div>
    )
}