import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Loading from "./components/Loading";

const Main = lazy(() => import("./pages/Main"));
const Shop = lazy(() => import("./pages/Shop"));
const Journal = lazy(() => import("./pages/Journal"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Provider store={Store}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<Main />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/about" element={<About />} />
              <Route path="/main" />
            </Route>
          </Routes>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
