import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { settingCoinObject } from "../functions/convertObject";
import CoinInfo from "../components/Coin/CoinInfo";

function CoinPage() {
    const { id } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setIsLoading(true); // Start loading
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => {
                    settingCoinObject(setCoinData, response.data);
                    setIsLoading(false); // End loading
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false); // End loading
                });
        }
    }, [id]);

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <div className='gray-wrapped'>
                    {coinData && <List coin={coinData} />}
                    {coinData && <CoinInfo heading={coinData.name} description={coinData.desc} />}
                </div>
            )}
        </div>
    );
}

export default CoinPage;

