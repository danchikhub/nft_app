import React from "react";
import { NavLink } from "react-router-dom";
import { getNFTItemsCursor } from "../../http/request";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCards } from "../../store/slices/CardSlice";
import { setControl } from "../../store/slices/ControlSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cards);
  const paginationHandle = (cursor) => {
    dispatch(
      setControl({
        isLoading: true,
      })
    );
    getNFTItemsCursor(cursor)
      .then((res) => {
        dispatch(
          setCards({
            cards: res.assets,
            next: res.next,
            previous: res.previous,
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
  };
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => {
          if (state.previous == null) {
            console.log("sorry not data");
          } else {
            paginationHandle(state.previous);
          }
        }}
        className={styles.pagination__link__wrapper}
      >
        <NavLink
          className={
            state.previous == null
              ? styles.pagination__link__dis
              : styles.pagination__link
          }
        >
          Previous
        </NavLink>
      </div>
      <div className={styles.line}></div>
      <div
        onClick={() => {
          paginationHandle(state.next);
        }}
        className={styles.pagination__link__wrapper}
      >
        <NavLink className={styles.pagination__link}>Next</NavLink>
      </div>
    </div>
  );
};

export default Pagination;
