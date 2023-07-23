import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

//Context
import { CardContext } from "../../context/CardContextProvider";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(CardContext);

  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to='/card'>
            <img
              src={shopIcon}
              alt="icon"
            />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
