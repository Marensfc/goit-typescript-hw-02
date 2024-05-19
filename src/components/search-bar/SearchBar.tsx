import { FormEvent } from "react";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleOnSubmit }) => {
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
