import { getCookie } from "cookies-next";

const getUserProfile = async () => {
  const token = getCookie("authorization");
  if (!token) {
    console.error("Token not found!");
    return null;
  }

  try {
    const response = await fetch("http://localhost:3333/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    return data.user.email;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export default getUserProfile;
