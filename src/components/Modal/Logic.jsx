import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../actions/product';

const UseForm = (validate, hideModal) => {
  const initialState = {
    id: null,
    name: '',
    description: '',
    implementation: '',
    investment: '',
  };
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      dispatch(updateProduct(values));
      hideModal();
      setValues(initialState);
    } else {
      console.log('validation errors');
    }
  }, [errors]);

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default UseForm;
