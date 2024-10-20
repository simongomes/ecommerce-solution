import { Link } from "react-router-dom";
import "./styles-cart.css";

const CheckoutSuccess = () => {
  return (
    <div className="cart-container">
      <h3>Checkout Success</h3>
      <Link to="/">
        <button className="btn">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
