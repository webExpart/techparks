import React from 'react'
import {
    Outlet
  } from "react-router-dom";

const AppBody = () => {
  return (
    <div>AppBody
        <Outlet/>
    </div>
  )
}

export default AppBody