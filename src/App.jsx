import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Frontpage from "./pages/Frontpage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />}>
            <Route mainPage element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="main_page">
        {/* <Frontpage /> */}
        <MainPage />
      </div>
    </>
  );
}

export default App;
