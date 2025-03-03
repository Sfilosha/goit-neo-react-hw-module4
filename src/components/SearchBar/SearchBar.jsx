import React from "react";
import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const queryValue = form.elements.query.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.query.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля

    onSearch(queryValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus="on"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
