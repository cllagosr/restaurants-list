import axios from "axios";

const apiKey =
  "oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx";
const proxyURL = "http://localhost:8080";
const yelpURL = "https://api.yelp.com/v3/";

export default axios.create({
  baseURL: `${proxyURL}/${yelpURL}`,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
