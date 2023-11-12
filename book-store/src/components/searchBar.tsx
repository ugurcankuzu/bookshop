"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface ISearchBar {
  setSearchText: Dispatch<SetStateAction<string>>;
  initialSearchText: string;
}

export default function SearchBar({
  setSearchText,
  initialSearchText,
}: ISearchBar) {
  const handleChange = function (event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  };

  return (
    <div className={searchBarStyles.searchBarWrapper}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={searchBarStyles.searchBarIcon}
      />
      <input
        type="text"
        placeholder="Lord of the Rings - J.R.R Tolkien"
        className={searchBarStyles.searchBarInput}
        value={initialSearchText}
        onChange={handleChange}
      />
    </div>
  );
}

const searchBarStyles = {
  searchBarWrapper:
    "w-full relative border border-smoke rounded sm:w-1/2 md:w-2/3",
  searchBarIcon:
    "text-xl absolute right-1 top-1/2 -translate-y-1/2 fill-coal/90",
  searchBarInput: "w-full p-1 pr-8 bg-transparent outline-none",
};
