import css from "./SearchBar.module.css";

const SearchBar = ({ handleOnSubmit }) => {
  return (
    <header className={css.header}>
      <form onSubmit={handleOnSubmit} className={css.form}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images..."
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
