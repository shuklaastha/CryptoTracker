import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
function Grid({ coin }) {
    return(
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 ? 'grid-container-red' : ''}`} >
      <div className='info-flex'>
        <img src={coin.image} className='coin-logo' alt={`${coin.name} logo`} />
        <div className='name-col'>
        <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h.toFixed(2)>0 ?(
      <div className='chip-flex'> 
            <div className='price-chip'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trend-chip-up'>
                <TrendingUpRoundedIcon />
            </div>
        </div>)
       :(<div className='chip-flex'> 
        <div className='price-chip-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
        <div className='trend-chip-down'>
            <TrendingDownRoundedIcon />
        </div>
        </div>)}    

        <div className='info-container' style={{color: coin.price_change_percentage_24h > 0 ? 
            "var(--green)!important" : "var(--red)!important"
            , fontSize: "1rem"}}>
            <h3>${coin.current_price.toLocaleString()}</h3>
            <p className='total-volume'>Total Volume:${coin.total_volume.toLocaleString()}</p>
            <p className='market-cap'>Market Cap:${coin.market_cap.toLocaleString()}</p>
        </div>
    </div>
    </Link>
  );
}


export default Grid
