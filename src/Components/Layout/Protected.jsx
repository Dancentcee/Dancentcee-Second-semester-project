import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import {AuthContext} from './index'


function Protected() {
    const [isLoggedIn, userInfo, meToggle] = useContext(AuthContext);
    console.log(isLoggedIn)
    if(!isLoggedIn){
        return <Navigate replace to="/" />
    }

  return (
    <Outlet />
  )
}

export default Protected