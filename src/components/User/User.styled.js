import styled from 'styled-components';

const UserInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Profile = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background-color: white;
  border-radius: 5px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p:first-of-type {
    color: #445063;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    color: #445063;
  }
`;

const Map = styled.section`
  height: 350px;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
`;

export { UserInfo, Profile, Map };
