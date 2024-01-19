"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import algoliasearch, { SearchClient } from "algoliasearch";
import HitComponent from "./hitComponent";
import { MultipleQueriesQuery } from "@algolia/client-search";

export default function SearchBar() {
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
  );
  const searchClient:SearchClient = {
    ...algoliaClient,
    search(requests: any[] | readonly MultipleQueriesQuery[]) {
      if (requests.every(({ params }) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
            hitsPerPage: 0,
            exhaustiveNbHits: false,
            query: "",
            params: "",
          })),
        });
      }
      return algoliaClient.search(requests);
    },
  };
  return (
    <InstantSearch
      searchClient={searchClient}
      future={{ preserveSharedStateOnUnmount: false }}
      indexName="products"
    >
      <div className="w-full relative">
        <SearchBox
          placeholder="Lord of the Rings - J.R.R Tolkien"
          classNames={{
            input: searchBarStyles.searchBarInput,
            submitIcon: searchBarStyles.searchBarIcon,
            loadingIcon: searchBarStyles.searchBarIcon,
            root: searchBarStyles.searchBarWrapper,
            resetIcon: "hidden",
          }}
        />
        <Hits
          hitComponent={HitComponent}
          className="absolute top-full w-full mt-2 z-[100] bg-pearl shadow-xl rounded"
          classNames={{
            item: "w-full min-h-[35px] p-2 hover:bg-coal/10 transition-all duration-[.5s]",
            list: "flex flex-col divide-y"
          }}
        />
      </div>
    </InstantSearch>
  );
}
/*
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
 */
const searchBarStyles = {
  searchBarWrapper: "w-full relative border border-smoke rounded",
  searchBarIcon:
    "text-xl absolute right-1 top-1/2 -translate-y-1/2 fill-coal/90",
  searchBarInput: "w-full p-1 pr-8 bg-transparent outline-none",
};
