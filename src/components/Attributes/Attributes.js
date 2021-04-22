import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import API from '../../api/get';
import { Attr, Tags, EditBtns } from './Attributes.styled';
import { setProduct } from '../../actions/product';

function Attributes({ product }) {
  const [categories, setCategories] = useState(product.categories);
  const [models, setModels] = useState(product.businessModels);
  const [TRL, setTrl] = useState(product.trl);
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const trl = useSelector(s => s.trl);

  const handleEdit = () => {
    setEdit(true);
  }

  const handleCancel = () => {
    setEdit(false);
  }

  const handleCatChange = e => {
    const value = e.target.value
    const cats = value.split(', ').map((cat, i) => ({
        id: i + 1,
        name: cat,
    }));
    setCategories(cats);
  }

  const handleModelChange = e => {
    const value = e.target.value
    const mods = value.split(', ').map((m, i) => ({
        id: i + 1,
        name: m,
    }));
    setModels(mods);
  }

  const handleTRLChange = e => {
    const value = e.target.value;

    const filter = trl.filter(i => i.name === value);

    setTrl(filter[0]);
  }

  const handleSubmit = async () => {
    const data = {
      ...categories,
      ...models,
      ...TRL,
    }

    try {
      const res = await API.put('/product/6781/', JSON.stringify(data));
      if (res.status === 200) {
        alert('Success');
        dispatch(setProduct(res.data));
      }
    } catch(err) {
      alert(err);
    }

    setEdit(false);
  }

  let toRender;

  if (!edit) {
    toRender = (
      <>
        <EditBtns>
          <button onClick={handleEdit}>Edit</button>
        </EditBtns>
        <h3 onClick={handleEdit}>
          Categories
        </h3>
        <Tags>
          {categories.map(i => <p key={i.id}># {i.name}</p>)}
        </Tags>
        <h3>Bussiness Models</h3>
        <Tags>
          {models.map(i => <p key={i.id}># {i.name}</p>)}
        </Tags>
        <h3>Technology Readiness Level</h3>
        <Tags>
          <p>{TRL.name}</p>
        </Tags>
      </>
    );
  } else {
    toRender = (
      <>
        <EditBtns>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </EditBtns>
        <h3>
          Categories
        </h3>
        <input type="text"
          onChange={handleCatChange}
          defaultValue={categories.map(({name}) => name).join(', ')} name="categories" />
        <h3>Bussiness Models</h3>
        <input type="text"
          onChange={handleModelChange}
          defaultValue={models.map(({name}) => name).join(', ')} name="bussiness" />
        <h3>Technology Readiness Level</h3>
        <select defaultValue={TRL.name} onChange={handleTRLChange}>
          {!trl.length ? (
            <option>None found</option>
          ) : trl.map(i => <option key={i.name} value={i.name}>{i.name}</option>)}
        </select>
      </>
    )
  }

  return (
    <Attr>
      {toRender}
    </Attr>
  );
}

export default Attributes;
