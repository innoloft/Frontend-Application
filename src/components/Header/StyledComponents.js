import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    color: white;
  }
  .left_header {
    .logo {
      max-width: 14rem;
      height: 1.7rem;
    }
  }
  .middle_header {
    .search_box {
      color: #212529;
      width: 31rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: none;
      outline: none;
    }
    .search_icon {
      position: relative;
      z-index: 2;
      right: 22px;
      color: black;
      top: 3px;
    }
  }
  .right_header {
    display: flex;
    .one_section {
      display: flex;
      align-items: center;
      margin-left: 13px;
    }
    .icon_down {
      padding: 0;
      font-size: 16px;
    }
    .notification,
    .user {
      margin-left: 13px;
      font-size: 30px;
    }
    .one_section {
      padding-left: 15px;
    }
  }
  @media (min-width: 901px) {
    .hamburger {
      display: none;
      font-size: 1.8rem;
      cursor: pointer;
    }
    .header_navbar {
      display: none;
    }
  }
  @media (max-width: 900px) {
    .hamburger {
      display: block;
      margin-right: 10px;
      cursor: pointer;
    }
    .logo {
      display: none;
    }
    .container {
      width: 100%;
    }
    .middle_header {
      flex-grow: 1;
      align-self: center;
      .search_box {
        width: 100%;
      }
      .search_icon {
        display: none;
      }
    }
  }
`;
