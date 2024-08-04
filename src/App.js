import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import MealsPage from "./pages/Meals";
import MealPage from './pages/Product'

import ErrorPage from "./pages/Error";
import MainNavigation from "./components/MainNavigation";


function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/products/:id" element={<MealPage/>} />
        <Route path="*" element={<ErrorPage />} />ß
      </Routes>
      {/* <div className="App">
        <HomePage />
      </div> */}
    </>
  );
}

export default App;
