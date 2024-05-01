import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ccomponent/Home";
import Header from "./ccomponent/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./ccomponent/Cart";

import "./style/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
