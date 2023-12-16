import { CSSProperties, Dispatch, HTMLInputTypeAttribute } from "react";

type TAnimatedInput = {
  inputWrapperStyle: string;
  labelStyle: CSSProperties;
  labelText: string;
  inputStyle: CSSProperties;
  inputType?: HTMLInputTypeAttribute;
  inputName: string;
  setInputData?: Dispatch<any>;
  inputReducerAction?: string;
};

export default TAnimatedInput;
