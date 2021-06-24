import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";

import { Avatar } from "./Avatar";

const Wrapper = styled.main`
  border: 0.005rem solid lightgrey;
  border-radius: 0.25rem;
  background: white;
  padding: 2rem;
  margin: 0 0 0.5rem 0.5rem;

  .info {
    text-align: center;
    margin: 0 auto;

    .user_name {
      margin: 0.625rem 0 0.125rem;
      font-size: 1.2rem;
    }

    small {
      width: 100%;
    }

    p {
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .mail {
        margin-right: 0.25rem;
        color: #272e72;
        font-size: 1.25rem;
      }

      span {
        color: #272e72;
      }
    }

    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: 1px solid #272e72;
      color: #272e72;
      border-radius: 0.25rem;
      background: white;
      transition: all 0.2s ease;

      &:hover {
        background: #272e72;
        color: white;
      }
    }
  }
`;

export const UserInfo = ({ user = {} }) => {
  const { email, position, profilePicture, firstName, lastName } = user;

  return (
    <Wrapper>
      <Avatar profilePicture={profilePicture} />
      <div className="info">
        <h5 className="user_name">{`${firstName} ${lastName}`}</h5>
        <small>{position}</small>
        <p>
          <HiOutlineMail className="mail" />
          <span>{email}</span>
        </p>
        <button>Contact me</button>
      </div>
    </Wrapper>
  );
};
