import type { Component } from 'solid-js';
import Navigation from './components/Navigation';
import Increment from './components/Increment';
import RoutesProvider from './components/Routes';
import logo from './logo.svg';
import styles from './App.module.css';
import { Link } from 'solid-app-router';

const App: Component = () => {
  return (
    <>
      <RoutesProvider />
    </>
  );
};

export default App;
