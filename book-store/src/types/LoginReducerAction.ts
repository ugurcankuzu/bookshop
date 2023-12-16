import ELoginAction from "@/enums/LoginActionEnums";

type TLoginReducerAction = {
  type: ELoginAction;
  payload: string;
};

export default TLoginReducerAction;
