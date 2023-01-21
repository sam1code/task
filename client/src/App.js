import React from "react";
import Page1 from "./page1/Page1";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Page1 />} />
    </Routes>
  );
};

export default App;
