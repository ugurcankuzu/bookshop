import EActionTypes from "@/enums/cartContextActionEnum";
import TProduct from "./product";

type TReducerAction = {
  type: EActionTypes;
  payload?: TProduct;
};

export default TReducerAction;
