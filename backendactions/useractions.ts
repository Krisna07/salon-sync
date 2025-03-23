import { UserFormData } from "@/app/register/user/signup/page";

export async function CreateUser(data: UserFormData) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to create user");
    }

    return result;
  } catch (err) {
    return err instanceof Error ? err.message : "An error occurred";
  }
}
