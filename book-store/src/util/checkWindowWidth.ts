import { Dispatch, SetStateAction, UIEvent } from "react";

export default function checkWindowWidth(
  event: Event,
  setWindowWidth: Dispatch<SetStateAction<number>>
) {
  setWindowWidth(window.innerWidth);
}
