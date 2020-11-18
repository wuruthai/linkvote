import React from 'react';

import { VoteProvider } from './user.context';

const StoreProvider = ({ children }) => {
  return <VoteProvider>{children}</VoteProvider>;
};

export default StoreProvider;
