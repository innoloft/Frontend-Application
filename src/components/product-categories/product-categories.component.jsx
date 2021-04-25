import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { updateCategories } from '../../redux/product/product.actions';

import './product-categories.styles.scss';

const ProductCategories = ({ categories, updateCategories }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [updatedCategories, setUpdatedCategories] = useState(categories);

    const handleCategoryChange = (event, id) => {
        const newValue = event.target.value;
        const newCat = updatedCategories.map(cat => {
            if (cat.id === id) {
                cat.name = newValue;
            }
            return cat;
        });
        setUpdatedCategories(newCat);
    }

    const addNewCategory = () => {
        if (newCategory) {
            const newCat = {
                id: new Date().getTime(),
                name: newCategory
            }
            const newUpdatedCategories = [...updatedCategories, newCat];
            setUpdatedCategories(newUpdatedCategories);
            setNewCategory('');
        } else {
            alert('Please valid input');
        }
    }

    const handleAddNew = (event) => {
        setNewCategory(event.target.value);
    }

    const handleOnSave = () => {
        setIsEditing(false);
        updateCategories(updatedCategories);
    }
    return (
        <div className="product-categories">
            <div className="top-section">
                <h6>Categories</h6>
                <button className="edit-btn" type="button">
                    {
                        isEditing ?
                            <FontAwesomeIcon
                                title="Save"
                                icon={faSave}
                                color="black"
                                size="1x" onClick={() => handleOnSave()} />
                            :
                            <FontAwesomeIcon
                                title="Edit"
                                icon={faEdit}
                                color="black"
                                size="1x"
                                onClick={() => setIsEditing(true)} />
                    }
                </button>
            </div>
            <ul>
                {updatedCategories.map((cat) => {
                    return isEditing ?
                        <li key={cat.id}>
                            <input
                                type="text"
                                defaultValue={cat.name}
                                onChange={(event) => handleCategoryChange(event, cat.id)} />
                        </li>
                        :
                        <li key={cat.id}>{cat.name}</li>
                }
                )}
                {isEditing ?
                    <li className="add-new">
                        <input type="text" value={newCategory || ''}
                            onChange={(event) => handleAddNew(event)} />
                        <button>
                            <FontAwesomeIcon
                                title="Add New Category"
                                icon={faPlusSquare}
                                color="black"
                                size="1x"
                                onClick={() => addNewCategory()} />
                        </button>
                    </li> : null}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCategories: categories => dispatch(updateCategories(categories))
});

export default connect(null, mapDispatchToProps)(ProductCategories);