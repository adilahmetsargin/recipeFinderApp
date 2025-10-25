import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes (e.g., chicken)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
