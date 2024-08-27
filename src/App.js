import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import MealsPage from "./pages/Meals";
import ProductPage from "./pages/Product";
import Cart from "./pages/Cart";

import ErrorPage from "./pages/Error";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryname/foods" element={<MealsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />ß
      </Routes>
      {/* <div className="App">
        <HomePage />
      </div> */}
    </>
  );
}

export default App;
