import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import ProductPage from "./pages/product-page";
import LayoutMain from "./components/layouts/layout-main";
import CartPage from "./pages/cart-page";
import CheckoutSuccess from "./modules/cart/checkout-success";

function App() {
  return (
    <Provider store={store}>
      <div className="site-conteiner">
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order-success" element={<CheckoutSuccess />} />
          </Routes>
        </LayoutMain>
      </div>
    </Provider>
  );
}

export default App;
