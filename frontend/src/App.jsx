import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Column } from "./components/Column";
import { SiteHeader } from "./components/SiteHeader";
import { Main } from "./pages/Main";
import { CheckOut } from "./pages/CheckOut";
import { ViewOrders } from "./pages/ViewOrders";
import { AddProduct } from "./pages/AddProduct";
import Contact from "./pages/Contact"; // Import Contact as default
import About from "./pages/About"; // Import About as default
import { Shirts } from "./pages/Shirts"; // Import Meals
import { CurrentUserProvider } from "./context/CurrentUserProvider"; // Import CurrentUserProvider
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import { ZoomProvider } from "./context/ZoomContext"; // Import ZoomProvider
import { ZoomControls } from "./components/ZoomControls"; // Import ZoomControls
import "./pages/Main.css"; // Import Main.css

function App() {
  return (
    <CurrentUserProvider>
      <ThemeProvider>
        <ZoomProvider>
          <Router>
            <Column>
              <SiteHeader />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/check-out" element={<CheckOut />} />
                <Route path="/orders" element={<ViewOrders />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/shirts" element={<Shirts />} /> {/* Add Meals route */}
              </Routes>
              <ZoomControls />
            </Column>
          </Router>
        </ZoomProvider>
      </ThemeProvider>
    </CurrentUserProvider>
  );
}

export default App;