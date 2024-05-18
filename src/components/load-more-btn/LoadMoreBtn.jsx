import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ addPage }) => {
  return (
    <button className={css.btn} onClick={addPage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
