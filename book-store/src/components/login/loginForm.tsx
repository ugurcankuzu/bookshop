"use client";
import { useContext, useReducer } from "react";
import { TLoginFormData } from "@/types/formData";
import { CSSProperties } from "react";
import AnimatedInput from "../animatedInput";
import TLoginReducerAction from "@/types/LoginReducerAction";
import ELoginAction from "@/enums/LoginActionEnums";
import loginUser from "@/util/loginUser";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/userContext";
import EUserActionTypes from "@/enums/userContextActionEnum";

export default function LoginForm() {
  const initialData: TLoginFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useReducer(formReducer, initialData);
  const router = useRouter();
  const userctx = useContext(UserContext);
  function formReducer(state: TLoginFormData, action: TLoginReducerAction) {
    switch (action.type) {
      case ELoginAction.changeEmail: {
        return { ...state, email: action.payload };
      }
      case ELoginAction.changePassword: {
        return { ...state, password: action.payload };
      }
      default: {
        return {} as TLoginFormData;
      }
    }
  }
  return (
    <form
      className={loginFormStyles.formWrapper}
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        loginUser(formData).then((tkn) => {
          if (tkn) {
            sessionStorage.setItem("usertkn", tkn);
            userctx.userDispatch({ type: EUserActionTypes.login });
            router.push("/");
          } else {
            alert("Login Failed Please Try Again");
          }
        });
      }}
    >
      <AnimatedInput
        key={0}
        settings={{
          labelStyle: loginFormStyles.inputLabel,
          inputStyle: loginFormStyles.input,
          inputWrapperStyle: loginFormStyles.inputWrapper,
          labelText: "E-Mail",
          inputName: "email",
          inputType: "email",
          setInputData: setFormData,
          inputReducerAction: ELoginAction.changeEmail,
        }}
      />
      <AnimatedInput
        key={1}
        settings={{
          labelStyle: loginFormStyles.inputLabel,
          inputStyle: loginFormStyles.input,
          inputWrapperStyle: loginFormStyles.inputWrapper,
          labelText: "Password",
          inputName: "password",
          inputType: "password",
          setInputData: setFormData,
          inputReducerAction: ELoginAction.changePassword,
        }}
      />
      <button className={loginFormStyles.submitButton}>Login</button>
    </form>
  );
}

const loginFormStyles = {
  formWrapper: "w-full flex flex-col gap-2",
  inputWrapper: "w-full h-[40px] relative",
  inputLabel: {
    pointerEvents: "none",
    position: "absolute",
    fontSize: "1rem",
  } as CSSProperties,
  submitButton: "bg-coal/90 text-pearl rounded py-1",
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    backgroundColor: "#c7c7c733",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    padding: "0 10px",
  } as CSSProperties,
};
