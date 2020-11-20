import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATHS } from 'constant';

const useNavigation = () => {
  let history = useHistory();

  const goPath = useCallback(
    (path) => {
      history.push(path);
    },
    [history]
  );

  const goHomePage = useCallback(() => goPath(ROUTE_PATHS.HOME), [history]);
  const goNewItemPage = useCallback(() => goPath(ROUTE_PATHS.NEW), [history]);

  return { goHomePage, goPath, goNewItemPage };
};

export default useNavigation;
