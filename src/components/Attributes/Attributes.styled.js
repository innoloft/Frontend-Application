import styled from 'styled-components';

const Attr = styled.section`
  h3 {
    margin: 10px 0;
    color: #445063;
  }

  input {
    width: 100%;
  }

  select {
    width: 100%;
  }
`;

const Tags = styled.div`
  font-size: 13px;

  p {
    color: #828a97;
    width: fit-content;
    border: 1px solid #ddd;
    border-radius: 1em;
    padding: 5px 7px;
    display: inline-block;
    margin: 3px 5px;
  }
`;

const EditBtns = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 3px 5px;
    margin: 0 3px;
    background-color: #272e71;
    border: 1px solid #272e71;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export { Attr, Tags, EditBtns };
