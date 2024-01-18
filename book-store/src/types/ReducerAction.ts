import EActionTypes from "@/enums/cartContextActionEnum";
import TProduct from "./product";
import TCartItem from "./cartItem";

type TReducerAction = {
  type: EActionTypes;
  payload?: TProduct | TCartItem[] | TCartItem;
};

export default TReducerAction;
