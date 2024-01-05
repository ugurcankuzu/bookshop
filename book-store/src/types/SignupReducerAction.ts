import ESignupAction from "@/enums/SignupActionEnum";

type TSignupReducerAction = {
  type: ESignupAction;
  payload: string;
};

export default TSignupReducerAction;
