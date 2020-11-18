const actions = {
  setUserInfo: (userInfo) => ({ type: 'SET_USER_INFO', payload: userInfo }),
  setLoading: (isLoading) => ({ type: 'SET_LOADING', payload: isLoading }),
};

export default actions;
