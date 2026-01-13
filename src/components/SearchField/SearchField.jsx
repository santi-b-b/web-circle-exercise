import styles from "./SearchField.module.css";

const SearchField = ({ setSearchText }) => {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
