import axios from '../utils/axios';
import React, { useEffect, ReactNode, useLayoutEffect, useMemo } from 'react';
import { IUser } from '../Interface/user.interface';
import { axiosErrorHandler } from '../utils/axiosErrorHandler';

const UserContext = React.createContext<IUser | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  console.log('user provider');

  const [user, setUser] = React.useState<IUser>();

  useLayoutEffect(() => {
    axios
      .get('auth/getUser')
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
  }, []);

  const value = useMemo(()=> {
    return user
  }, [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const user = React.useContext(UserContext);

  if (!user) {
    return false;
  }
  return user;
};

export default UserProvider;
