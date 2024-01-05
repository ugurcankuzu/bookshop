import { Dispatch } from "react";
import TReducerAction from "./ReducerAction";
import TCartItem from "./cartItem";

type TCartContext = {
  cartState: TCartItem[];
  cartDispatch: Dispatch<TReducerAction>;
};

export default TCartContext;
