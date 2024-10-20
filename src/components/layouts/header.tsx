import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { RootState } from "@/store";
import "./style-layout.css";

const Header = () => {
  const cartTotalItemCount = useSelector(
    (state: RootState) => state.cart.totalItems
  );

  return (
    <header className="site-hader">
      <h1 className="logo">E-commerce Solution</h1>
      <Link to="/cart">
        <div className="cart-action">
          <Badge
            className="cart-item-count"
            count={cartTotalItemCount}
            size="small"
            color="#f56a00"
            showZero
          />

          <ShoppingCartOutlined />
        </div>
      </Link>
    </header>
  );
};

export default Header;
