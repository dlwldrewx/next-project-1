import { useState } from "react";

export default function Home() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key": "live_lEbk4O3Go0gPaTHrAv0KMgIbHOtE300NMRs1wTSNUWjRf7Uc0F9Qvq0dNMZlCVZr", // Use your API key
          },
        }
      );
      const data = await response.json();
      setCatImage(data[0]?.url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>🐾 Random Cat Generator 🐾</h1>
      <button onClick={fetchCat} style={styles.button}>
        {loading ? "Fetching..." : "Get a Random Cat"}
      </button>
      {catImage && <img src={catImage} alt="Random Cat" style={styles.image} />}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  button: {
    backgroundColor: "#32C36C",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  image: {
    marginTop: "20px",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};
