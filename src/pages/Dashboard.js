import React, { useEffect, useState } from "react";
import Header from '../components/Common/Header';
import TabsComponents from '../components/Dashboard/TabsComponents';
import Search from '../components/Dashboard/Search';
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import { get100Coins } from "../functions/get100Coins";

function Dashboard() {
    const [coins, setCoins] = useState([]); // Initialize as an empty array
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = (coins || []).filter( // Add default empty array in case coins is undefined
        (coin) =>
            coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            try {
                const response = await get100Coins(); 
                setCoins(response || []); // Ensure coins is always an array
            } catch (error) {
                console.error("Error fetching coins:", error);
                setCoins([]); // Set coins to an empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    useEffect(() => {
        const coinsToPaginate = search ? filteredCoins : coins;
        const initialCount = (page - 1) * 10;
        setPaginatedCoins(coinsToPaginate.slice(initialCount, initialCount + 10));
    }, [page, coins, search, filteredCoins]);

    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Search search={search} handleChange={handleChange} />
                    <TabsComponents
                        coins={search ? filteredCoins : paginatedCoins}
                        setSearch={setSearch}
                    />
                    {!search && (
                        <PaginationComponent
                            page={page}
                            handlePageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default Dashboard;
