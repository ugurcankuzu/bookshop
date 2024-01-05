"use client";
import { CSSProperties, useReducer, useState } from "react";
import AnimatedInput from "../animatedInput";
import { TSignupFormData } from "@/types/formData";
import TSignupReducerAction from "@/types/SignupReducerAction";
import ESignupAction from "@/enums/SignupActionEnum";
import signupUser from "@/util/signupUser";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  //const [formData, setFormData] = useState<TFormData<"SIGNUP">>();
  const router = useRouter();
  const initialData: TSignupFormData = {
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const [formData, setFormData] = useReducer(formReducer, initialData);
  function formReducer(state: TSignupFormData, action: TSignupReducerAction) {
    switch (action.type) {
      case ESignupAction.changeEmail: {
        return { ...state, email: action.payload };
      }
      case ESignupAction.changeName: {
        return { ...state, name: action.payload };
      }
      case ESignupAction.changeSurname: {
        return { ...state, surname: action.payload };
      }

      case ESignupAction.changePassword: {
        return { ...state, password: action.payload };
      }
      case ESignupAction.changePasswordConfirmation: {
        return { ...state, passwordConfirmation: action.payload };
      }
      default: {
        return {} as TSignupFormData;
      }
    }
  }
  return (
    <form
      method="POST"
      className={signupFormStyles.formWrapper}
      onSubmit={(event) => {
        event.preventDefault();
        signupUser(formData).then((result) =>
          result
            ? router.push("/login")
            : alert("We can't register at this moment. Please try again later.")
        );
      }}
    >
      <div className={signupFormStyles.nameSurnameWrapper}>
        <AnimatedInput
          key={0}
          settings={{
            inputWrapperStyle: signupFormStyles.inputWrapper,
            labelStyle: signupFormStyles.inputLabel,
            labelText: "Name",
            inputStyle: signupFormStyles.input,
            inputName: "name",
            inputType: "text",
            setInputData: setFormData,
            inputReducerAction: ESignupAction.changeName,
          }}
        />
        <AnimatedInput
          key={1}
          settings={{
            inputWrapperStyle: signupFormStyles.inputWrapper,
            labelStyle: signupFormStyles.inputLabel,
            labelText: "Surname",
            inputStyle: signupFormStyles.input,
            inputName: "surname",
            inputType: "text",
            setInputData: setFormData,
            inputReducerAction: ESignupAction.changeSurname,
          }}
        />
      </div>
      <div className={signupFormStyles.emailWrapper}>
        <AnimatedInput
          key={2}
          settings={{
            inputWrapperStyle: signupFormStyles.inputWrapper,
            labelStyle: signupFormStyles.inputLabel,

            labelText: "E-Mail",
            inputStyle: signupFormStyles.input,
            inputName: "email",
            inputType: "email",
            setInputData: setFormData,
            inputReducerAction: ESignupAction.changeEmail,
          }}
        />
      </div>
      <div className={signupFormStyles.passwordWrapper}>
        <AnimatedInput
          key={3}
          settings={{
            inputWrapperStyle: signupFormStyles.inputWrapper,
            labelStyle: signupFormStyles.inputLabel,

            labelText: "Password",
            inputStyle: signupFormStyles.input,
            inputName: "password",
            inputType: "password",
            setInputData: setFormData,
            inputReducerAction: ESignupAction.changePassword,
          }}
        />
        <AnimatedInput
          key={4}
          settings={{
            inputWrapperStyle: signupFormStyles.inputWrapper,
            labelStyle: signupFormStyles.inputLabel,
            labelText: "Confirm Password",
            inputStyle: signupFormStyles.input,
            inputName: "confirmPassword",
            inputType: "password",
            setInputData: setFormData,
            inputReducerAction: ESignupAction.changePasswordConfirmation,
          }}
        />
      </div>
      <button className={signupFormStyles.submitButton}>Register</button>
    </form>
  );
}

const signupFormStyles = {
  formWrapper: "w-full flex flex-col gap-2",
  nameSurnameWrapper: "w-full flex gap-2",
  emailWrapper: "w-full",
  passwordWrapper: "flex flex-col gap-2",
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
