
// @ts-ignore
import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm"
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    console.log(data); // This is your actual data
  } catch (error) {
    console.log("Error:", error);
  }
}

// Calling the function
fetchItems();