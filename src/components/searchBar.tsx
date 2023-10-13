"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import SearchIcon from "../icons/search";
import { FiSearch as SearchIcon } from "react-icons/fi";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/searchResults?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-gray-200 p-1 rounded-lg"
      />
      <button type="submit" className="bg-blue-500 p-2 rounded-lg">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
