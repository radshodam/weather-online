import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../Icons/Icons";

export default function SearchForm({ setIsModalOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.length > 3) {
      navigate(`/?city=${encodeURIComponent(searchQuery)}`);
    }
    setIsModalOpen(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md focus:outline-none border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm focus:ring focus:ring-blue-200 focus:border-b hover:border-b focus:border-b-green-200 hover:border-b"
          placeholder="Search City"
          name="search"
          id="search"
          required
        />
        <button type="submit">
          <SearchIcon sizeHeight={33} sizeWidth={45} color={"#959595"} className="px-2 cursor-pointer" />
        </button>
      </div>
    </form>
  );
}
