import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

//Function
import { shorten, isInCard, quantityCount } from "../../helper/functions";

//Context
import { CardContext } from "../../context/CardContextProvider";

//Icons
import trashIcon from "../../assets/icons/trash.svg";

//Style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="products" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {isInCard(state, productData.id) ? (
            <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>
              +
            </button>
          ) : (
            <button className={styles.smallButton} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>
              Add to Card
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
          {quantityCount(state, productData.id) > 1 && (
            <button className={styles.smallButton} onClick={() => dispatch({ type: "DECREASE", payload: productData })}>
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button className={styles.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
              <img src={trashIcon} alt="icon" style={{ width: "15px" }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
