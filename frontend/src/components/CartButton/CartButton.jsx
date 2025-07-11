import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartButton.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart></AiOutlineShoppingCart>
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
