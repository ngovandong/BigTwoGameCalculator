import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Play from "../pages/Play/Play";
function Navigate() {
  const [game, setGame] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home game={game} setGame={setGame} />} />
        <Route path="/play" element={<Play game={game} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigate;
