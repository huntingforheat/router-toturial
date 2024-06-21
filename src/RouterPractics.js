import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "./components/Board";

function RouterPractics() {

  return (
    <Routes>
      <Route path="/board" element={<Board />} />
    </Routes>
  );

}

export default RouterPractics;  