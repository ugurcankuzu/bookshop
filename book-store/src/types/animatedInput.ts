import { CSSProperties, HTMLInputTypeAttribute } from "react";

type TAnimatedInput = {
  inputWrapperStyle: string;
  labelStyle: CSSProperties;
  labelText: string;
  inputStyle: CSSProperties;
  inputType?: HTMLInputTypeAttribute;
  inputName: string;
};

export default TAnimatedInput;
