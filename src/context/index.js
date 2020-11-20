import React from 'react';

import { VoteProvider } from './vote.context';

const StoreProvider = ({ children }) => {
  return <VoteProvider>{children}</VoteProvider>;
};

export default StoreProvider;
