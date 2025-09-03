import { Link, Outlet } from "react-router"

const Layout = () => {
    return(
        <>
            <Link to="home">Home  |</Link>
            <Link to="insert">Insert  |</Link>
            <Link to="display">Display  |</Link>
            <Link to="update">Update  |</Link>
            <Link to="search">Search  |</Link>
            <Link to="about">About  |</Link>

            <hr size="3"/>

            <Outlet/>

            <hr size="3"/>

            www.MyCompany.com @ all right reserved.

        </>
    )
}

export default Layout;