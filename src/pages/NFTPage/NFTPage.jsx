import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NFTPage.module.scss";
import { setControl } from "../../store/slices/ControlSlice";
import { getNFTItem } from "../../http/request";
import { NavLink } from "react-router-dom";

const NFTPage = () => {
  const dispatch = useDispatch();
  const [nft, setNft] = useState({});
  const [nftCollection, setNftCollection] = useState({});
  const [contract, setContract] = useState({});
  const [paymentTokens, setPaymentTokens] = useState([])
  useEffect(() => {
    dispatch(
      setControl({
        isLoading: true,
      })
    );
    let url = JSON.parse(localStorage.getItem("nftItem"));
    getNFTItem(url.contract__address, url.token_id)
      .then((res) => {
        setNft(res);
        setNftCollection(res.collection);
        setContract(res.asset_contract);
        setPaymentTokens(res.collection.payment_tokens)
      })
      .then(() =>
        dispatch(
          setControl({
            isLoading: false,
          })
        )
      );
  }, []);
  console.log(nft);
  console.log(paymentTokens);
  const imgStyle = {
    backgroundImage: "url(" + nft.image_url + ")",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div style={imgStyle} className={styles.img__wrapper}></div>
          <div className={styles.nft__info}>
            <div className={styles.nft__info__collection}>
              <h1 className={styles.nft__name}>{nft.name}</h1>
              <div className={styles.nft__collection__name}>
                Collection - {nftCollection.name}
              </div>
              <div className={styles.inner}>
                <div className={styles.nft__characteristic}>Created at:</div>
                <div className={styles.characteristic__value}>{nftCollection.created_date}</div>
              </div>
              <div className={styles.desc__wrapper}>
                <div className={styles.nft__characteristic}>Description collection:</div>
                <div className={styles.desc}>
                  {nftCollection.description == ""
                    ? "No description"
                    : nftCollection.description}
                </div>
              </div>
              <div className={styles.inner}>
                <div className={styles.nft__characteristic}>Contact address:</div>
                <div className={styles.characteristic__value}>{contract.address}</div>
              </div>
              <div className={styles.token}>
                <div className={styles.nft__characteristic}>Token id:</div> 
                <div className={styles.token__item}>{nft.token_id}</div>
              </div>
              <div className={styles.inner}>
                <div className={styles.nft__characteristic}>Payment tokens:</div> 
                <div className={styles.token__item}>
                    {
                      paymentTokens.map((item) => {
                        return <span className={styles.payment__token}>{item.name}</span>
                      })
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagination__wrapper}>
          <NavLink className={styles.pagination__link} to="/">Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
