"use client";

import SignupCard from "@/components/signupCard";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const pathName = usePathname();
  return (
    <main className={loginPageStyles.mainFrame}>
      <SignupCard pathName={pathName} />
    </main>
  );
}

const loginPageStyles = {
  mainFrame: "flex-1 flex justify-center items-center",
};
