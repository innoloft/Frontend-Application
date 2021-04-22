import styled from 'styled-components';

const ProductDetails = styled.section`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PMI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  p {
    font-size: 25px;
    font-weight: bold;
    color: #445063;
  }

  span {
    font-weight: normal;
    font-size: 15px;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;

  button {
    color: #272e71;
    width: 100%;
    height: 40px;
    margin: 5px;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: white;
    outline: 0;

    &:hover {
      background-color: #ccc;
      border-color: #ccc;
    }
  }

  .active {
    color: white;
    background-color: #272e71;
    border: 1px solid #272e71;
    &:hover {
      background-color: #272e71;
      border-color: #272e71;
    }
  }
`;

const TabContent = styled.div`
  margin: 5px;
  padding: 10px;
  color: #454d4b;
  background-color: white;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
`;

export { ProductDetails, Image, PMI, Tab, TabContent };
