import { Dispatch } from "react";
import TReducerAction from "./cartContextReducerAction";
import TCartItem from "./cartItem";

type TCartContext = {
  cartState: TCartItem[];
  cartDispatch: Dispatch<TReducerAction>;
};

export default TCartContext;
