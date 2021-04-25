import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

import { updateTrl } from '../../redux/product/product.actions';

import './product-trl.styles.scss';

const ProductTrl = ({ trl, trlList, updateTrl }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTrl, setUpdatedTrl] = useState(trl);

    const handleTrlChange = event => {
        const newTrl = trlList.find(obj => obj.id === event.target.value);
        setUpdatedTrl(newTrl);
    }

    const handleOnSave = () => {
        setIsEditing(false);
        updateTrl(updatedTrl);
    }

    return (
        <div className="product-trl">
            <div className="top-section">
                <h6>TRL</h6>
                <button className="edit-btn" type="button">
                    {isEditing ?
                        <FontAwesomeIcon
                            onClick={() => handleOnSave()}
                            title="Save"
                            icon={faSave}
                            color="black"
                            size="1x" />
                        :
                        <FontAwesomeIcon
                            onClick={() => setIsEditing(true)}
                            title="Edit"
                            icon={faEdit}
                            color="black"
                            size="1x" />
                    }
                </button>
            </div>
            {isEditing ?
                <select name="trl" defaultValue={trl.id} onChange={handleTrlChange}>
                    {trlList.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
                :
                <p className="product-trl-value">{trl.name}</p>
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    updateTrl: trl => dispatch(updateTrl(trl))
});

export default connect(null, mapDispatchToProps)(ProductTrl);