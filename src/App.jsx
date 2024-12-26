import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Products from "./components/products/products";
import NotFound from "./components/not-found/not-found";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/sign-up";
import ProtectedRoute from "./components/protected-route/protected-route";
import ProductDetails from "./components/products/products-details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
