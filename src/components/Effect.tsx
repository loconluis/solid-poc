import { Component, createEffect, createSignal, onCleanup } from 'solid-js';
import { styled } from 'solid-styled-components';
import GoBack from './GoBack';
import Layout from './Layout';

const Effect: Component = () => {
  const [getText, setText] = createSignal('');

  const handleTextChangeForTitle = () => {
    document.title = getText();
  };

  const handleOnInput = (e: InputEvent | any) => {
    const value = e.target.value;
    setText(value);
  };

  createEffect(() => {
    return handleTextChangeForTitle();
  });

  onCleanup(() => (document.title = 'Solid App '));

  return (
    <Layout>
      <EffectContainer>
        Write something here:
        <div>
          <input type="text" onInput={handleOnInput} />
          {getText() !== '' && (
            <small>Check the title of the page 👆🏼 is changing too!</small>
          )}
        </div>
        <p>{getText()}</p>
        <GoBack />
      </EffectContainer>
    </Layout>
  );
};

const EffectContainer = styled('div')`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: 4rem;
  max-width: 800px;
  word-break: break-all;
  input {
    margin-top: 2rem;
    width: 800px;
    height: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 2rem;
  }

  small {
    color: red;
    font-size: 1rem;
  }
`;

export default Effect;
