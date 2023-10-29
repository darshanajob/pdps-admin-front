import axios from "axios";
import * as url from "./url.js";

// Get the authentication token from local storage
const token = localStorage.getItem("auth-token");

// Define your Axios configuration
const config = {
  xsrfHeaderName: "X-XSRF-TOKEN",
  withCredentials: true,
  Authorization: `Bearer ${token}`,
};

// Define common headers
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

// Define a function to add a booking hall application
const addBookingHallApplication = async (bookingData) => {
  let responseData;
  const authToken = localStorage.getItem("auth-token");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${authToken}`,
    // Add more custom headers here if needed
  };

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/watersup", admin, {
      headers: headers,
    });

    responseData = response.data;
  } catch (error) {
    console.error("Error adding booking hall application:", error);
    // Handle errors here if needed
  }

  return responseData;
};

const BookingHallService = {
  addBookingHallApplication,
  // Add more methods related to booking hall application here
};

export default BookingHallService;
