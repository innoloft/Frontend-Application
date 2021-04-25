import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { updateBusinessModels } from '../../redux/product/product.actions';


import './business-models.styles.scss';

const BusinessModels = ({ businessModels, updateBusinessModels}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newBusinessModel, setNewBm] = useState('');
    const [updatedBms, setUpdatedBms] = useState(businessModels);

    const handleBmsChange = (event, id) => {
        const newValue = event.target.value;
        const newBms = updatedBms.map(cat => {
            if (cat.id === id) {
                cat.name = newValue;
            }
            return cat;
        });
        setUpdatedBms(newBms);
    }

    const addNewBm = () => {
        if (newBusinessModel) {
            const newBm = {
                id: new Date().getTime(),
                name: newBusinessModel
            }
            const newUpdatedBms = [...updatedBms, newBm];
            setUpdatedBms(newUpdatedBms);
            setNewBm('');
        } else {
            alert('Please valid input');
        }
    }

    const handleAddNew = (event) => {
        setNewBm(event.target.value);
    }

    const handleOnSave = () => {
        setIsEditing(false);
        updateBusinessModels(updatedBms);
    }

    return (
        <div className="business-models">
            <div className="top-section">
                <h6>Business Models</h6>
                <button className="edit-btn" type="button">
                    {
                        isEditing ?
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
            <ul>
                {updatedBms.map(bm => {
                    return isEditing ?
                        <li key={bm.id}>
                            <input
                                defaultValue={bm.name}
                                onChange={(event) => handleBmsChange(event, bm.id)} />
                        </li>
                        :
                        <li key={bm.id}>{bm.name}</li>
                }
                )}
                {isEditing ?
                    <li className="add-new">
                        <input type="text" value={newBusinessModel || ''}
                            onChange={(event) => handleAddNew(event)} />
                        <button>
                            <FontAwesomeIcon
                                title="Add New Business Model"
                                icon={faPlusSquare}
                                color="black"
                                size="1x"
                                onClick={() => addNewBm()} />
                        </button>
                    </li> : null}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateBusinessModels: bms => dispatch(updateBusinessModels(bms))
});

export default connect(null, mapDispatchToProps)(BusinessModels);