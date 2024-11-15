import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Accomodation from "./views/Accomodation/Accomodation";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import Layout from "./views/Layout/Layout";
import data from "./data/logements.json";
import "./App.scss";
function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(data);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home logements={logements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:idCard" element={<Accomodation />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
