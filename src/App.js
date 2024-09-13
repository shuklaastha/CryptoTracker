import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import Watchlist from "./pages/Watchlist";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/watchlist" element={<Watchlist />} /> 
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
        
    </div>
  );
}

export default App;
