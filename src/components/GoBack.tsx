import { Component } from 'solid-js';
import { Link } from 'solid-app-router';
import { styled } from 'solid-styled-components';

const GoBack: Component = () => {
  let x;
  return (
    <LinkBack>
      <Link href="/" class="back-button">
        🔙 Go Back
      </Link>
    </LinkBack>
  );
};

const LinkBack = styled('div')`
  font-size: 2rem;
  margin: 2rem 0;
  a {
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default GoBack;
