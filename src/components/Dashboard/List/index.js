import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import {Tooltip} from '@mui/material';
function List({coin}) {
  return (
    <tr className='list-row'>
    <Tooltip title="Coin Image">
      <td className='td-image'>
        <img src={coin.image} className='coin-logo' alt={`${coin.name} logo`} />
      </td>
      </Tooltip>
      <Tooltip title="Coin Info " placement='bottom-start'>
      <td>
        <div className='name-col'>
        <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      <Tooltip title="Price Change In 24Hrs" placement='bottom-start'>
      {coin.price_change_percentage_24h.toFixed(2)>0 ?(
      <td className='chip-flex'> 
            <div className='price-chip'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trend-chip-up'>
                <TrendingUpRoundedIcon />
            </div>
            
        </td>)
       :(<td className='chip-flex'> 
        <div className='price-chip-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
        <div className='trend-chip-down'>
            <TrendingDownRoundedIcon />
        </div>
        </td>)}  
        </Tooltip>  
        <Tooltip title="Current Price" >
        <td style={{color: coin.price_change_percentage_24h > 0 ? 
            "var(--green)!important" : "var(--red)!important"
            , fontSize: "1rem", textAlign:'center'}}>
            <h3>${coin.current_price.toLocaleString()}</h3>
        </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement='bottom-start'>
        <td className='td-right-align'>
                <p className='total-volume'>${coin.total_volume.toLocaleString()}</p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement='bottom-start'>
        <td className='td-right-align'>
                <p className='market-cap'>${coin.market_cap.toLocaleString()}</p>
        </td>
        </Tooltip>
    </tr>
  )
}

export default List
