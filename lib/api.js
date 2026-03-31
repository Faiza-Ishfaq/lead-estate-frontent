export const API_URL = "http://localhost:4000/api"; 

export async function signupUser(data) {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", 
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
            credentials: "include", 
        });

        const result = await res.json();
        return result;
    } catch (err) {
        console.error("Login Error:", err);
        return { success: false, message: "Network error" };
    }
}

export async function postProperty(formData) {
  try {
    const data = new FormData();

    // ✅ Use forEach instead of formData
    Object.keys(formData).forEach((key) => {
      if (key === "amenities") {
        data.append(key, JSON.stringify(formData[key]));
      } 
      else if (key !== "images" && key !== "video") {
        data.append(key, formData[key]);
      }
    });

    // Append images
    if (formData.images) {
      formData.images.forEach((img) => data.append("images", img.file));
    }

    // Append video
    if (formData.video) {
      data.append("video", formData.video.file);
    }

    const res = await fetch(`${API_URL}/properties`, {
      method: "POST",
      body: data,
    });

    if (!res.ok) throw new Error("Failed to post property");

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Post Property Error:", err);
    return { success: false, message: err.message || "Network error" };
  }
}