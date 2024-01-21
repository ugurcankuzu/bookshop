"use client";

import getTotalPages from "@/util/getTotalPages";
import {
  faBackwardFast,
  faBackwardStep,
  faForwardFast,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function Paginator({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}) {
  const [totalPages, setTotalPages] = useState<number>(0);
  const category = useSearchParams().get("category");
  useEffect(() => {
    getTotalPages().then((totalPages) => setTotalPages(totalPages));
  }, []);
  const handleFastBackward = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage("1");
  };
  const handleStepBackward = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage((currentPage) => (parseInt(currentPage) - 1).toString());
  };
  const handleFastForward = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(totalPages.toString());
  };
  const handleStepForward = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage((currentPage) => (parseInt(currentPage) + 1).toString());
  };
  useEffect(() => {
    setCurrentPage("1");
  }, [category]);
  return (
    <section className={PaginatorStyles.paginatorFrame}>
      <div className={PaginatorStyles.controlWrappers + " justify-end"}>
        {parseInt(currentPage) > 1 && (
          <>
            <button className={PaginatorStyles.buttons} onClick={handleFastBackward}>
              <FontAwesomeIcon icon={faBackwardFast} />
            </button>
            <button className={PaginatorStyles.buttons} onClick={handleStepBackward}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>
          </>
        )}
      </div>
      <p className={PaginatorStyles.label}>{currentPage}</p>
      <div className={PaginatorStyles.controlWrappers + " justify-start"}>
        {parseInt(currentPage) !== totalPages && (
          <>
            <button className={PaginatorStyles.buttons} onClick={handleStepForward}>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>
            <button className={PaginatorStyles.buttons} onClick={handleFastForward}>
              <FontAwesomeIcon icon={faForwardFast} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

const PaginatorStyles = {
  paginatorFrame: "w-full h-[50px] flex justify-center items-center",
  controlWrappers: "w-full flex gap-4",
  label:"px-4",
  buttons: "bg-coal/90 text-pearl px-2 py-1 rounded shadow",
};
