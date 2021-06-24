import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAppIdData } from '../../redux/appIdSlice';
import styled from 'styled-components';
import axios from 'axios';
import MainTemplate from '../../templates/MainTemplate';
import Map from '../../components/Map/map';
import User from '../../components/User/User';

const StyledWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30rem 10rem 6rem 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 59.375rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 30rem 10rem 6rem auto 1fr;
  }

  input {
    border: none;
    background-color: inherit;
    font-size: 2rem;

    :focus {
      outline: none;
    }
  }

  textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    background-color: inherit;
    font-size: 2rem;
    min-height: 30rem;
  }
`;

const StyledImg = styled.img`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 30rem;
  justify-self: center;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 1 / -1;
  }
`;

const StyledMainInfoWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 1 / -1;
  }

  input:nth-child(1) {
    font-size: 4rem;
    margin: 0;
  }

  input:nth-child(2) {
    font-size: 2rem;
  }
`;

const StyledButtonsWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 1 / -1;
  }

  button {
    width: 100%;
    border: none;
    background-color: inherit;
    font-size: 3rem;
    cursor: pointer;

    :hover {
      background-color: #dad8d8;
    }

    :focus {
      outline: none;
    }
  }
`;

const StyledTabWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 4;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 1 / -1;
  }

  p {
    font-size: 1.8rem;
  }

  ul {
    margin: 0.2rem;
    list-style-type: none;
  }

  form {
    width: max-content;
    display: flex;
    border: 2px solid #dad8d8;

    button {
      font-size: 1.6rem;
      font-weight: bold;
      background-color: inherit;
      border: none;
      cursor: pointer;

      :focus {
        outline: none;
      }
    }
  }

  textarea {
    height: 100%;
  }

  label {
    font-size: 1.6rem;
    font-weight: bold;
  }
  select {
    width: 30rem;
    background-color: inherit;
    border: none;
    font-size: 1.6rem;

    :focus {
      outline: none;
    }
  }

  span {
    margin-top: 0.5rem;
  }
`;

const StyledUserWrapper = styled.div`
  grid-column: 3;
  grid-row: 1 / 3;
  align-self: center;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 1 / 2;
    grid-row: 5;
  }
`;

const StyledMapWrapper = styled.div`
  grid-column: 3;
  grid-row: 3 / -1;

  @media only screen and (max-width: 59.375rem) {
    grid-column: 2 / -1;
    grid-row: 5;
  }
`;

const Product = () => {
  const appData = useSelector(getAppIdData);
  const [productData, getProductData] = useState(null);
  const [productError, gerProductError] = useState(null);
  const [displayDescription, setDisplayDescription] = useState(true);
  const [displayAttributes, setDisplayAttributes] = useState(false);
  const [name, setName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [models, setModels] = useState([]);
  const [newModel, setNewModel] = useState('');
  const [trlList, getTrlList] = useState(null);
  const [selectedTrl, setSelectedTrl] = useState('');

  useEffect(() => {
    axios
      .get('https://api-test.innoloft.com/product/6781/')
      .then((res) => {
        getProductData(res.data);
        setName(res.data.name);
        setCompanyType(res.data.type.name);
        setDescription(res.data.description);
        setCategories(res.data.categories);
        setModels(res.data.businessModels);
        setSelectedTrl(res.data.trl.name);
      })
      .catch((err) => {
        gerProductError(err.message);
      });

    axios.get('https://api-test.innoloft.com/trl/').then((res) => {
      getTrlList(res.data);
    });
  }, []);

  const handleDescription = () => {
    setDisplayDescription(true);
    setDisplayAttributes(false);
  };

  const handleAttributes = () => {
    setDisplayDescription(false);
    setDisplayAttributes(true);
  };

  const handleChange = (name, input) => {
    axios.put('https://api-test.innoloft.com/product/6781/', { [name]: input });
  };

  return (
    <MainTemplate>
      {productData ? (
        <StyledWrapper>
          <StyledImg src={productData.picture} alt='product' />
          <StyledMainInfoWrapper>
            <input
              type='text'
              value={name}
              placeholder='Company name'
              onChange={(e) => {
                setName(e.target.value);
                handleChange('name', name);
              }}
            />
            <input
              type='text'
              value={companyType}
              placeholder='Company type'
              onChange={(e) => {
                setCompanyType(e.target.value);
                handleChange('type.name', companyType);
              }}
            />
          </StyledMainInfoWrapper>
          <StyledButtonsWrapper>
            <button onClick={handleDescription}>Descrtiption</button>
            <button onClick={handleAttributes}>Attributes</button>
          </StyledButtonsWrapper>
          {displayDescription && (
            <StyledTabWrapper>
              <textarea
                value={description}
                placeholder='Company type'
                onChange={(e) => {
                  setDescription(e.target.value);
                  handleChange('description', description);
                }}
              />
            </StyledTabWrapper>
          )}
          {displayAttributes && (
            <StyledTabWrapper>
              <h3>Categories</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  onClick={() =>
                    setCategories([
                      ...categories,
                      { id: newCategory, name: newCategory },
                    ])
                  }
                >
                  Add
                </button>
                <input
                  type='text'
                  placeholder='New category'
                  value={newCategory}
                  onChange={(e) => {
                    setNewCategory(e.target.value);
                    handleChange('categories', categories);
                  }}
                />
              </form>
              <ul>
                {categories ? (
                  categories.map((category) => (
                    <li key={category.name}>{category.name}</li>
                  ))
                ) : (
                  <span>No categories</span>
                )}
              </ul>
              <h3>Business models</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  onClick={() =>
                    setModels([...models, { id: newModel, name: newModel }])
                  }
                >
                  Add
                </button>
                <input
                  type='text'
                  placeholder='New business model'
                  value={newModel}
                  onChange={(e) => {
                    setNewModel(e.target.value);
                    handleChange('businessModels', models);
                  }}
                />
              </form>
              <ul>
                {models.map((model) => (
                  <li key={model.id}>{model.name}</li>
                ))}
              </ul>
              <h3>TRL</h3>

              <form>
                <label htmlFor='trl'>Change TRL</label>
                <select
                  name='trl'
                  onChange={(e) => {
                    setSelectedTrl(e.target.value);
                    handleChange('trl.name', selectedTrl);
                  }}
                >
                  {trlList.map((trl) => (
                    <option key={trl.id} value={trl.name}>
                      {trl.name}
                    </option>
                  ))}
                </select>
              </form>
              <span>{selectedTrl}</span>
            </StyledTabWrapper>
          )}
          {appData.hasUserSection && (
            <StyledUserWrapper>
              <User />
            </StyledUserWrapper>
          )}
          <StyledMapWrapper>
            <Map />
          </StyledMapWrapper>
        </StyledWrapper>
      ) : (
        <h1>{productError}</h1>
      )}
    </MainTemplate>
  );
};
export default Product;
