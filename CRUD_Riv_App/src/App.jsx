import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Diaplay from "./Diaplay";
import Insert from "./Insert";
import Update from "./Update";
import Search from "./Search";
import About from "./About";
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="display" element={<Diaplay/>}/>
              <Route path="insert" element={<Insert/>}/>
              <Route path="update" element={<Update/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;