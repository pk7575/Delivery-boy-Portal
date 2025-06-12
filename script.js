// Delivery Boy Portal Script

// 👇 Backend base URL
const BASE_URL = "https://suriyawan-saffari-backend.onrender.com";

// Example - Delivery Boy Dashboard Load
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome-msg");
  if (welcome) {
    welcome.innerText = "🚚 Delivery Boy Dashboard Connected to Backend!";
  }

  // Example - Fetch assigned deliveries
  fetch(`${BASE_URL}/api/delivery/assignments`)
    .then(res => res.json())
    .then(data => {
      console.log("📦 Assigned Deliveries:", data);
    })
    .catch(err => {
      console.error("❌ Error connecting to backend:", err);
    });
});
