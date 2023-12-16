"use client";
import Link from "next/link";
import LoginForm from "./login/loginForm";
import SignupForm from "./signup/signupForm";
export default function SignupCard({ pathName }: { pathName: string }) {
  return (
    <section className={signupCardStyles.cardWrapper}>
      <div className={signupCardStyles.cardHeader}>
        <h2>
          {pathName === "/signup"
            ? "Register to BookShop"
            : "Login to BookShop"}
        </h2>
      </div>
      {pathName === "/signup" ? <SignupForm /> : <LoginForm />}
      <div>
        {pathName === "/signup" ? (
          <Link href={"#"}>Switch to Login</Link>
        ) : (
          <>
            <Link href={"#"}>Create an account</Link>
            <Link href={"#"}>Forgot Password</Link>
          </>
        )}
      </div>
    </section>
  );
}

const signupCardStyles = {
  cardWrapper: "w-full flex flex-col gap-4 bg-smoke/10 ",
  cardHeader: ""
};
