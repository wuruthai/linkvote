import React, { useEffect, useMemo, useState, useCallback } from 'react';

const VoteContext = React.createContext();

export const VoteProvider = ({ children }) => {
  return <VoteContext.Provider value={{}}>{children}</VoteContext.Provider>;
};

export const useVote = () => React.useContext(VoteContext);
