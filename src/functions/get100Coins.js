import axios from "axios";

export const get100Coins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log("RESPONSE>>>", response.data);
    return response.data; // Ensure this returns an array
  } catch (error) {
    console.error("ERROR>>>", error.message);
    return []; // Return an empty array in case of error
  }
};
