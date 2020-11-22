import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Storage } from 'utils';
import { STORAGE_CONST, OPERATOR_CONST } from 'constant';
import { v4 as uuidv4 } from 'uuid';

const getInitialVoteList = () => {
  const storagedList = Storage.retrieveData(STORAGE_CONST.LINK_LIST) || [];
  const list = storagedList.map((link) => ({
    ...link,
    created: new Date(link.created),
    edited: new Date(link.edited),
  }));
  return list;
};

const VoteContext = React.createContext();

export const VoteProvider = ({ children }) => {
  const [voteList, setVoteList] = useState(getInitialVoteList);

  useEffect(() => {
    Storage.storeData(STORAGE_CONST.LINK_LIST, voteList);
  }, [voteList]);

  const addNewLink = useCallback(
    (item) => {
      const newItem = {
        ...item,
        id: uuidv4(),
        point: 0,
        created: new Date(),
        edited: new Date(),
      };
      setVoteList([newItem, ...voteList]);
    },
    [voteList]
  );

  const onVote = useCallback(
    (id, operator) => {
      const list = [...voteList];
      let item = list.find((link) => link.id === id);

      item.point =
        operator === OPERATOR_CONST.MINUS ? item.point - 1 : item.point + 1;
      item.edited = new Date();
      setVoteList(list);
    },
    [voteList]
  );
  const deleteLink = (id) => {
    const list = [...voteList];
    let itemIndex = list.findIndex((link) => link.id === id);
    list.splice(itemIndex, 1);
    setVoteList(list);
  };

  return (
    <VoteContext.Provider
      value={{
        voteList,
        addNewLink,
        onVote,
        deleteLink,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => React.useContext(VoteContext);
