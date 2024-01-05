import { TLoginFormData } from "@/types/formData";

export default async function loginUser(userCredentials: TLoginFormData) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const tkn = await response.text();
    return tkn;
  }
  return undefined;
}
