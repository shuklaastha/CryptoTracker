import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponents from "../components/Dashboard/TabsComponents";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponents coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to="/dashboard">
              <Button text="Dashboard" onClick={()=> console.log("Dashboard clicked")} />
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Watchlist;