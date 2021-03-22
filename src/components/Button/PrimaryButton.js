import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  background: #272e71;
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
`;
const PrimaryButton = (props) => {
  const { text, style, onClick } = props;
  return (
    <StyledButton style={{ ...style }} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default PrimaryButton;
