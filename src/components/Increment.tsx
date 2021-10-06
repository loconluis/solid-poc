import { Link } from 'solid-app-router';
import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import GoBack from './GoBack';
import Layout from './Layout';

const Increment: Component = () => {
  const [getCount, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => (prev == 0 ? 0 : prev - 1));

  const reset = () => setCount(0);

  return (
    <Layout>
      <IncrementStyleContainer>
        <p>
          The current count is: <span>{getCount()}</span>
        </p>
        <ButtonContainer>
          <Button onClick={decrement} type="button">
            {' '}
            −{' '}
          </Button>
          <Button onClick={increment} type="button">
            {' '}
            ✚{' '}
          </Button>
          <Button onClick={reset} type="button">
            {' '}
            ⛔️{' '}
          </Button>
        </ButtonContainer>
        <GoBack />
      </IncrementStyleContainer>
    </Layout>
  );
};

const IncrementStyleContainer = styled('div')`
  max-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  span {
    font-weight: bold;
  }
`;

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: space-space-between;
`;

const Button = styled('button')`
  width: 100px;
  height: 60px;
  border: none;
  &:first-child {
    margin-right: 20px;
  }

  &:last-child {
    margin-left: 20px;
  }
`;

export default Increment;
