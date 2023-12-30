import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SlideTest from "./pages/SlideTest";
import Header from "./components/Header";
import Apparels from "./pages/Apparels";
import Woven from "./pages/Woven";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product/apparels" element={<Apparels />} />
        <Route path="/product/woven" element={<Woven />} />
      </Routes>
    </BrowserRouter>
  );
}
