import { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import mockProducts from "../../api/mockProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    const products = mockProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch></BsSearch>
      </button>
    </form>
  );
}

export default SearchBar;
