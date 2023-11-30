import TProduct from "./product";

type TCartItem = TProduct & { amount: number };

export default TCartItem;
