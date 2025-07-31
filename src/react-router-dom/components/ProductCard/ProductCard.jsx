import React from "react";
import styles from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ title, price, image, id }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${id}`)} className={styles.wrapper}>
      <img src={image} alt="img" />
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
};
