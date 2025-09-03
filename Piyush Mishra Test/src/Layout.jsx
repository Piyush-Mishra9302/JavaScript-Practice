import { Link, Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <>
     <Link to="home">Home  |</Link>
            <Link to="about">Insert  |</Link>
            <Link to="faculty">Counter  |</Link>
            <Link to="cources">Display  |</Link>
            <Link to="contact">Color  |</Link>

            <hr size="3"/>

            <Outlet/>

            <hr size="3"/>

            www.MyCompany.com @ all right reserved.
     </>
  )
}

export default Layout