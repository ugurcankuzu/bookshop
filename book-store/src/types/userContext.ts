import { Dispatch } from "react";
import TUserReducerAction from "./userReducerAction";

type TUserContext = {
  userState: boolean;
  userDispatch: Dispatch<TUserReducerAction>;
};

export default TUserContext;
