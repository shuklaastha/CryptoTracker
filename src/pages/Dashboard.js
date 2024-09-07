import React, { useEffect, useState} from "react";
import axios from "axios";
import Header from '../components/Common/Header'
import TabsComponents from '../components/Dashboard/TabsComponents'
import Search from '../components/Dashboard/Search'
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";

function Dashboard() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    //search functionality
    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
      };
    
      var filteredCoins = coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
      );

      // Pagination
      const handlePageChange = (event, value) => {
        setPage(value);
        // Value = new page number
        var initialCount = (value - 1) * 10;
        setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
      };
    
    
    useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ).then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0,10));
        setLoading(false);
    })    

      .catch((error) => {
            console.log(error);
      });
    })
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
  )
}

export default Dashboard
