import React, {useState} from "react";
import {ThemeProvider, createTheme} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "../Grid";
import List from "../List";
import './styles.css';

export default function TabsComponents({coins}) {
  const [value, setValue] = useState('grid');


const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });


  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
            <div className="grid-flex">
                {coins.map((coin,i) =>{
                return(
                    <div key={i}>
                        <Grid coin={coin}/>
                    </div>
                );
            })}</div>
        </TabPanel>
        <TabPanel value="list">
            <table className='list-table'>
                {coins.map((items,i) =>{
                return(
                  <List key={i} coin={items}/>
                );
            })}
            </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}



