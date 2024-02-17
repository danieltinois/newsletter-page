import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
