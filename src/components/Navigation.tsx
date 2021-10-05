import { styled } from 'solid-styled-components';
import { Link } from 'solid-app-router';

const Navigation = () => {
  return (
    <NavContainer>
      <Link href="/first-component">
        <ButtonNav type="button">First Component</ButtonNav>
      </Link>
      <Link href="/increment">
        <ButtonNav type="button">Increment</ButtonNav>
      </Link>
      <ButtonNav type="button">Signal</ButtonNav>
      <ButtonNav type="button">Effect</ButtonNav>
      <ButtonNav type="button">TODO</ButtonNav>
      <ButtonNav type="button">Other</ButtonNav>
    </NavContainer>
  );
};

const NavContainer = styled('div')`
  display: flex;
  max-width: 50%;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  margin: 40% auto;
`;

const ButtonNav = styled('button')`
  height: 50px;
  width: 30rem;
  margin-bottom: 10px;
  border: none;
  background-color: #b700ff;
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #db7eff;
    cursor: pointer;
  }
`;

export default Navigation;
