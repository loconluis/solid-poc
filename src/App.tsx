import { Component, createEffect } from 'solid-js';
import RoutesProvider from './components/Routes';
import 'prismjs/themes/prism-tomorrow.css';

const App: Component = () => {
  return (
    <>
      <RoutesProvider />
    </>
  );
};

export default App;
