import EUserActionTypes from "@/enums/userContextActionEnum";

type TUserReducerAction = {
  type: EUserActionTypes;
  payload?: any;
};

export default TUserReducerAction;
