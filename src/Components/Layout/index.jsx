import React, { createContext, useState, useMemo, useCallback } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthContext = createContext(null);

function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userInfo = useMemo(() => isLoggedIn, []);
    const toggleUser = () => setIsLoggedIn(!isLoggedIn);
    const  meToggle = useCallback(
      () => {
        toggleUser()
      },
      [],
    )

    console.log(isLoggedIn)
    
  return (
    <AuthContext.Provider value={[isLoggedIn, userInfo, meToggle]}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default Layout;
