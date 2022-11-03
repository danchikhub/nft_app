import React from "react";
import { useSelector } from "react-redux";
import { CardItem } from "../index";
import styles from "./CardList.module.scss";

const CardList = () => {
  const cards = useSelector((state) => state.cards);
  return (
    <div className={styles.cardlist__wrapper}>
      {cards.items.map((item) => {
        if (item.image_url !== null) {
          return <CardItem key={item.id} item={item} />;
        }
      })}
    </div>
  );
};

export default CardList;
