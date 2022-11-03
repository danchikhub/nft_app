import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardItem.module.scss";

const CardItem = ({ item }) => {
  let { image_url, name } = item;
  let navigate = useNavigate();
  const imgStyle = {
    backgroundImage: "url(" + image_url + ")",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const handleClick = (id) => {
    localStorage.setItem(
      "nftItem",
      JSON.stringify({
        contract__address: item.asset_contract.address,
        token_id: item.token_id,
      })
    );
    navigate(`/nft/${id}`);
  };
  return (
    <div className={styles.carditem__wrapper}>
      <div style={imgStyle} className={styles.carditem__img__wrapper}></div>
      <div>
        <div className={styles.carditem__title}>{name}</div>
      </div>
      <div className={styles.carditem__link__wrapper}>
        <div
          onClick={() => handleClick(item.id)}
          className={styles.carditem__link}
        >
          More detailed
        </div>
      </div>
    </div>
  );
};

export default CardItem;
