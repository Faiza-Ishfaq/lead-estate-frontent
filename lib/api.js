export const API_URL = "http://localhost:4000/api"; 

export async function signupUser(data) {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Signup Error:", err);
    return { success: false, message: "Network error" };
  }
}

export async function loginUser(data) {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        return result;
    } catch (err) {
        console.error("Login Error:", err);
        return { success: false, message: "Network error" };
    }
}