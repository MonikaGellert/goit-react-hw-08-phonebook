import styled from 'styled-components';

const Button = styled.button`
  font-family: Coiny;
  height: 32px;
  padding: 0 15px;
  border-radius: 15px;
  border-color: white;
  background-color: blue;
  color: white;
  transition-property: background-color, color;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: gold;
    text-shadow: 2px 2px blueviolet;
  }
`;
export default Button;
