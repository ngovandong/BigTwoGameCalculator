import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Play from "../pages/Play/Play";
function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/play" element={<Play  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigate;
