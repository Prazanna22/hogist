import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Page } from "./components/Page";
import { Blog } from "./components/Blog";
import { ContactUs } from "./components/ContactUs";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  
      useEffect(() => {
          setTimeout(() => setLoading(false), 2000);
      }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center h-screen  justify-center  bg-black">
          <div className="w-32 h-32 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (

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
      )}
    </>
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
