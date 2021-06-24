import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  margin: 0.5rem;

  main {
    flex: 1;

    &:not(:last-child):not(:first-child) {
      margin: 0 2rem;

      @media (max-width: 43.75rem) {
        margin: 0;
      }
    }
  }

  @media (max-width: 43.75rem) {
    flex-wrap: wrap;

    main {
      flex: 1;
    }
  }
`;

const Item = styled.p`
  padding: 0.35rem 0.5rem;
  margin: .125rem 0;
  color: rgb(50, 59, 73);
`;

export const Attributes = ({ businessModels, categories, trl }) => {
  return (
    <Wrapper>
      <main>
        <h4>Categories</h4>
        {categories.map(({ name }) => (
          <Item contentEditable>{name}</Item>
        ))}
      </main>
      <main>
        <h4>Business Models</h4>
        {businessModels.map(({ name }) => (
          <Item contentEditable>{name}</Item>
        ))}
      </main>
      <main>
        <h4>Technology Readiness Level</h4>
        <Item contentEditable>{trl.name}</Item>
      </main>
    </Wrapper>
  );
};
