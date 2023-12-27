import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Journal from "./pages/Journal";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
