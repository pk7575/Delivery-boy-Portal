const BASE_URL_DELIVERY = "https://suriyawan-saffari-backend.onrender.com";

fetch(`${BASE_URL_DELIVERY}/api/delivery/run-sheet`)
  .then(res => res.json())
  .then(data => console.log("Delivery Sheet:", data))
  .catch(err => console.error("Delivery error:", err));
