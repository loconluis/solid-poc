import { Component } from 'solid-js';
import GoBack from './GoBack';
import Layout from './Layout';

const CreateStore: Component = () => {
  let xx;
  return (
    <Layout>
      <p>Store</p>
      <GoBack />
    </Layout>
  );
};

export default CreateStore;
