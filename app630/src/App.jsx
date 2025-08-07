import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./Insert";
import Home from "./Home";
import Update from "./Update";
import About from "./About";
import Contact from "./Contact";
import Display from "./Display";
import EditData from "./EditData";
import Search from "./Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element = {<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="display" element={<Display/>} />
            <Route path="insert" element={<Insert />} />
            <Route path="update" element={<Update/>} />
            <Route path="search" element = {<Search />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="EditData/:id" element={<EditData/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
