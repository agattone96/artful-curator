export const getAIDescription = async (imageUrl) => {
  try {
    const res = await fetch("/api/ai-description", {
      method: "POST",
      body: JSON.stringify({ imageUrl }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data.description;
  } catch (error) {
    console.error("AI description generation failed:", error);
    throw new Error("Failed to generate AI description. Please try again.");
  }
};