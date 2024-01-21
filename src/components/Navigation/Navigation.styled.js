import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const changeActive = isActive => {
  switch (isActive) {
    case 'active':
      return 'color: green';
    case 'inactive':
      return 'color: green';
    default:
      return 'color: green';
  }
};

export const Link = styled(NavLink)`
  display: inline-block;
  font-family: Coiny;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: green;
  }
  &:not(:hover, :focus) {
    ${({ isActive }) => changeActive(isActive)}
  }
  nav &:hover,
  nav &:focus {
    color: blue;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;
