import React from 'react';
import Storage from '~/utils/storage';
import { STORAGE_CONST } from '~/constants/storage.const';

const UserInfoContext = React.createContext();
const initialState = { isLoading: true, userInfo: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const actions = {
  setUserInfo: (userInfo) => ({ type: 'SET_USER_INFO', payload: userInfo }),
  setLoading: (isLoading) => ({ type: 'SET_LOADING', payload: isLoading }),
};

export const UserInfoProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function getUserInfo() {
      const val = await Storage.retrieveData(STORAGE_CONST.UserInfo);
      dispatch(actions.setUserInfo(val));
      dispatch(actions.setLoading(false));
    }
    getUserInfo();
  }, []);

  return 's';
  // <UserInfoContext.Provider
  //   value={{
  //     userInfoState: state,
  //     userInfoDispatch: dispatch,
  //     userInfoActions: actions,
  //   }}
  // >
  //   {children}
  // </UserInfoContext.Provider>
};

export const useUserInfo = () => React.useContext(UserInfoContext);
