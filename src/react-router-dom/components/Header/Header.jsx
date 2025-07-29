import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const pages = [
    {
      title: "Главная",
      path: "/",
    },
    {
      title: "О нас",
      path: "/about",
    },
    {
      title: "Корзина",
      path: "/cart",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <nav>
        {pages.map((item, index) => (
          <span key={index} onClick={() => navigate(item.path)}>
            {item.title}
          </span>
        ))}
      </nav>
    </div>
  );
};
