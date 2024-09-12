import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import { settingCoinObject } from '../functions/convertObject';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrice } from '../functions/getCoinPrice';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';

export default function CoinPage() {
    const { id } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [priceType, setPriceType] = useState('prices');

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id, days]);

    async function getData() {
        setIsLoading(true);
        const data = await getCoinData(id);
        if (data) {
            settingCoinObject(setCoinData, data);
            const prices = await getCoinPrice(id, days);
            if (prices.length > 0) {
                setChartData({
                    labels: prices.map((price) => convertDate(price[0])),
                    datasets: [
                        {
                            data: prices.map((price) => price[1]),
                            label: `Price in USD (past ${days} days)`,
                            fill: false,
                            backgroundColor: '#3a80e9',
                            borderColor: '#3a80e9',
                        },
                    ],
                });
            }
        }
        setIsLoading(false); // Moved outside the condition to ensure it's always called
    }

    const handleDaysChange = async (event) => {
        setIsLoading(true);
        const selectedDays = event.target.value;
        setDays(selectedDays);
        const prices = await getCoinPrice(id, selectedDays);
        if (prices.length > 0) {
            setChartData({
                labels: prices.map((price) => convertDate(price[0])),
                datasets: [
                    {
                        data: prices.map((price) => price[1]),
                        label: `Price in USD (past ${selectedDays} days)`,
                        fill: false,
                        backgroundColor: '#3a80e9',
                        borderColor: '#3a80e9',
                    },
                ],
            });
        }
        setIsLoading(false);
    };

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='gray-wrapped'>
                        {coinData && <List coin={coinData} />}
                        <div className='gray-wrapped' style={{ marginLeft: '3rem', marginRight: '3rem' }}>
                            <SelectDays handleDaysChange={handleDaysChange} days={days} />
                            <LineChart chartData={chartData} />
                        </div>
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        {coinData && <CoinInfo heading={coinData.name} description={coinData.desc} />}
                    </div>
                </>
            )}
        </div>
    );
}
