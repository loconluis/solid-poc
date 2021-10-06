import { styled } from 'solid-styled-components';
import { Link } from 'solid-app-router';
import Layout from './Layout';

const Navigation = () => {
  return (
    <Layout>
      <Link href="/first-component">
        <ButtonNav type="button">First Component</ButtonNav>
      </Link>
      <Link href="/signal">
        <ButtonNav type="button">CreateSignal</ButtonNav>
      </Link>
      <Link href="/effect">
        <ButtonNav type="button">Effect</ButtonNav>
      </Link>
      <Link href="/store">
        <ButtonNav type="button">CreateStore</ButtonNav>
      </Link>
      <Link href="/todo">
        <ButtonNav type="button">Todo</ButtonNav>
      </Link>
      <ButtonNav type="button">Other</ButtonNav>
    </Layout>
  );
};

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
