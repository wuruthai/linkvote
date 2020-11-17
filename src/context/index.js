import React from 'react';

import { UserProvider } from './user.context';

const StoreProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default StoreProvider;
