"use client";
import Link from "next/link";
import LoginForm from "./login/loginForm";
import SignupForm from "./signup/signupForm";
import getLinkByLabel from "@/util/getLinkByLabel";
import Route from "@/types/route";
export default function SignupCard({ pathName }: { pathName: string }) {
  const login = getLinkByLabel("Login", undefined, false) as Route;
  const signup = getLinkByLabel("Signup", undefined, false) as Route;
  return (
    <section className={signupCardStyles.cardFrame}>
      <div className={signupCardStyles.cardWrapper}>
        <h2 className={signupCardStyles.cardHeader}>
          {pathName === "/signup" ? "Join Now" : "Login to BookShop"}
        </h2>
        {pathName === "/signup" ? <SignupForm /> : <LoginForm />}
        <div className={signupCardStyles.cardRoutes}>
          {pathName === "/signup" ? (
            <Link href={login.path}>Switch to Login</Link>
          ) : (
            <>
              <Link href={signup.path}>Create an account</Link>
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
  cardWrapper: "lg:w-2/5 flex flex-col items-start gap-4",
  cardHeader: "text-3xl font-bold",
  cardRoutes: "w-full flex gap-4"
};
