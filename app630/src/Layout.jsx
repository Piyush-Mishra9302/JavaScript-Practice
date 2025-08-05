import { Link, Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <Link to="home">Home</Link>
    <Link to="insert">Insert</Link>
    <Link to="display">Display</Link>
    <Link to="update">Update</Link>
    <Link to="editData">Update</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <hr size="3" />

    <Outlet/>

    <hr size="3" />

    www.company.com all right reserved.
    </>
  )
}

export default Layout