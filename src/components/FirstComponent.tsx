import { Component, onMount } from 'solid-js';
import Prismjs from 'prismjs';
import { styled } from 'solid-styled-components';
import Layout from '../components/Layout';
import GoBack from './GoBack';

const FirstComponent: Component = () => {
  const code = `
  // FirstComponent.tsx <-- File
  
  import { Component } from 'solid-js';

  const FirstComponent: Component = () => {
    return (
      <div>
        <div>Hey Im a Component. That's Crazy Bro!</div>
      </div>
    );
  };

  export default FirstComponent;

  `;

  onMount(() => Prismjs.highlightAll());
  return (
    <Layout>
      <MainContainer>Hey I'm a Component. That's Crazy Bro!</MainContainer>
      <CodeContainer>
        <pre>
          <code class="language-javascript">{code}</code>
        </pre>
      </CodeContainer>
      <GoBack />
    </Layout>
  );
};

const MainContainer = styled('div')`
  margin-bottom: 4rem;
  font-size: 5rem;
  border: 1px solid #ccc;
  padding: 2rem;
`;

const CodeContainer = styled('div')`
  width: 60%;
`;

export default FirstComponent;
