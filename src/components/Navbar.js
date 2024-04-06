import React from 'react';
import {useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const notAllowedPath = ["/dashboard", "/payment", "/cart"]
  return (
    <>
      {notAllowedPath.includes(location.pathname)!==-1 ? null : <nav>Navbar</nav>}
    </>
  )
}

export default Navbar