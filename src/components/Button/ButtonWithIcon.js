import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  background: #272e71;
  border-radius: 5px;
  color: white;
  .button_text {
    margin: 0 1rem;
  }
`;

const Button = (props) => {
  const { buttonStyle, icon, text, iconPosition } = props;

  return (
    <StyledButton style={{ ...buttonStyle }}>
      {iconPosition === "left" ? icon : ""}{" "}
      {<p className="button_text">{text}</p>}{" "}
      {iconPosition === "right" ? icon : ""}
    </StyledButton>
  );
};

export default Button;
