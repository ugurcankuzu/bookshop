"use client"
import SignupCard from "@/components/signupCard";
import { usePathname } from "next/navigation";

export default function SignupPage() {
  const pathName = usePathname();
  return (
    <main className={signupPageStyles.mainFrame}>
      <SignupCard pathName={pathName} />
    </main>
  );
}

const signupPageStyles = {
  mainFrame: "flex-1 flex justify-center items-center",
};
