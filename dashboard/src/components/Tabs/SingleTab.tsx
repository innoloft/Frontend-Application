import React from 'react'

interface SingleTabProps{
    label: string
}

export const SingleTab: React.FC<SingleTabProps> = props => {
    return (
        <div id={props.label}>
            {props.children}
        </div>
    )

}