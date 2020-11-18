import React from 'react';
import routes from 'routes';
import { RenderRoutes, Layout } from 'components';

function App() {
  return (
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  );
}

export default App;
