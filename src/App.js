import React from 'react';
import routes from 'routes';
import { RenderRoutes } from 'components';
import { PageLayout } from 'layouts';

function App() {
  return (
    <PageLayout>
      <RenderRoutes routes={routes} />
    </PageLayout>
  );
}

export default App;
