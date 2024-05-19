import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  addPage: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ addPage }) => {
  return (
    <button className={css.btn} onClick={addPage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
