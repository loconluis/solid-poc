import { Component, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';

interface Props {
  children: JSXElement;
}

const Layout: Component<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled('div')`
  display: flex;
  max-width: 1400px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

export default Layout;
