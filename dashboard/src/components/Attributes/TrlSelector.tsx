import React from 'react';
import { Trl } from '../../types/Trl';

interface TlrSelectorProps {
    trl: Trl
    setTrl: any
    trlValues: Trl[]
}

export const TrlSelector: React.FC<TlrSelectorProps> = props => {
    return(
        <div className="trl-selector">
            <select 
                name="trl" 
                id="trl-select" 
                value={props.trl.id}
                onChange={e => {
                    props.setTrl(props.trlValues.find(value => value.id === e.target.value))
                }}
                >
                {props.trlValues.map((trl: Trl) => {
                    return <option key={trl.id} value={trl.id}>{trl.name}</option>
                })}
            </select>
        </div>
    )
}