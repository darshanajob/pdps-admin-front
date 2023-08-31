import axios from "axios"
import React, { useState } from "react"
import * as url from "./url.js"


const token = localStorage.getItem("auth-token")

const config = {
  xsrfHeaderName: "X-XSRF-TOKEN",
  withCredentials: true,
  Authorization: `Bearer ${token}`,
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const addWaterSupplyApply = async admin => {
  let responseData;
  const authToken = localStorage.getItem("auth-token"); // Retrieve the auth token from local storage

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${authToken}`, // Include the retrieved auth token in the headers
    // Add more custom headers here if needed
  };

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/watersup", admin, {
      headers: headers, // Pass the headers to the Axios request
    });

    responseData = response.data;
  } catch (error) {
    // Handle errors here if needed
    console.error("Error adding water supply:", error);
  }

  return responseData;
};

//,
//         {headers: {"Access-Control-Allow-Origin": true}}



const WaterSupplyService = {

    addWaterSupplyApply,
  
}
export default WaterSupplyService
