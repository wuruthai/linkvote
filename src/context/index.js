import React from 'react';

import { VoteProvider } from './vote.context';
import { ToasterProvider } from './toaster.context';

const StoreProvider = ({ children }) => {
  return (
    <VoteProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </VoteProvider>
  );
};

export default StoreProvider;
