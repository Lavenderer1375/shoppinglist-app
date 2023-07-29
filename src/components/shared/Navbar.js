import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

//Context
import { CardContext } from "../../context/CardContextProvider";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

//Style
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { state } = useContext(CardContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/card">
            <img src={shopIcon} alt="icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
