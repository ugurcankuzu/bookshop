"use client";
import Link from "next/link";
import LoginForm from "./login/loginForm";
import SignupForm from "./signup/signupForm";
export default function SignupCard({ pathName }: { pathName: string }) {
  return (
    <section className={signupCardStyles.cardFrame}>
      <div className={signupCardStyles.cardWrapper}>
        <h2 className={signupCardStyles.cardHeader}>
          {pathName === "/signup" ? "Join Now" : "Login to BookShop"}
        </h2>
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
      </div>
    </section>
  );
}

const signupCardStyles = {
  cardFrame: "w-full flex flex-col items-center gap-4 p-2",
  cardWrapper: "lg:w-3/5 2xl:w-2/5",
  cardHeader: "text-3xl font-bold",
};
