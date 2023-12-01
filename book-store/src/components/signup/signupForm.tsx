import { CSSProperties } from "react";
import AnimatedInput from "../animatedInput";

export default function SignupForm() {
  return (
    <form className={signupFormStyles.formWrapper}>
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
          }}
        />
      </div>
      <button>Signup</button>
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
  input: { width: "100%", height: "100%" } as CSSProperties,
};
