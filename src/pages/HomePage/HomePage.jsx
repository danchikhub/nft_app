import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, CardList, Pagination } from "../../components";
import { getNFTItems } from "../../http/request";
import { setCards } from "../../store/slices/CardSlice";
import { setControl } from "../../store/slices/ControlSlice";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./HomePage.module.scss";

const override = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  right: "50%",
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.control);

  useEffect(() => {
    dispatch(
      setControl({
        isLoading: true,
      })
    );
    getNFTItems()
      .then((res) => {
        dispatch(
          setCards({
            cards: res.assets,
            next: res.next,
            previos: res.previos,
          })
        );
      })
      .then(() =>
        dispatch(
          setControl({
            isLoading: false,
          })
        )
      );
  }, []);

  return (
    <div>
      {isLoading ? (
        <ClipLoader
          cssOverride={override}
          color="#57DDC3"
          size={45}
        ></ClipLoader>
      ) : (
        <div>
          <Header />
          <div className={styles.container}>
            <div className={styles.homepage__title}>
              Stay on trend explore NFT
            </div>
            <CardList />
            <div className={styles.pagination__wrapper}>
              <Pagination />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
