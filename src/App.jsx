import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Page } from "./components/Page";
import { Blog } from "./components/Blog";
import { ContactUs } from "./components/ContactUs";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": "Home - My App",
      "/shop": "Shop - My App",
      "/contact": "Contact - My App",
      "/pages": "Pages - My App",
      "/blog": "Blog - My App",
    };
    document.title = titleMap[location.pathname] || "My App";
  }, [location]);

  return null;
}

export default App;
