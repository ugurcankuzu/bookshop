"use client";
import { TSignupFormData } from "@/types/formData";
import { useRouter } from "next/navigation";
import Router from "next/router";

export default async function signupUser(userCredentials: TSignupFormData) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/signup", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return true;
  }
  return false;
}
