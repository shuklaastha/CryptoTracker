import axios from 'axios';

export const getCoinPrice = async (id, days) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
        return response.data.prices;
    } catch (error) {
        console.error(error);
        return [];
    }
};
