"use client";
import Link from "next/link";
import LoginForm from "./login/loginForm";
import SignupForm from "./signup/signupForm";
export default function SignupCard({ pathName }: { pathName: string }) {
  return (
    <section className={signupCardStyles.cardWrapper}>
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
    </section>
  );
}

const signupCardStyles = {
  cardWrapper: "w-full flex flex-col gap-4 bg-smoke/10 p-2",
  cardHeader: "text-3xl font-bold",
};
