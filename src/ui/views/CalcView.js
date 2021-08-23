import React, {useState, useEffect} from 'react';
import ScrollView from './ScrollView';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DatePicker from '../components/DatePicker'
import TextField from '@material-ui/core/TextField'
import {getCoins, getTransactionDetails} from '../../controller/Query'
import { tr } from 'date-fns/locale';


const CalcView = (props) => {
    const headerStyle =   {
      fontFamily: 'lato',
    }
    
    const [coins, setCoins] = useState([["btc", "bitcoin"]]);
    const [selectedCoin, setSelectedCoin] = useState('btc-bitcoin');
    const [amount, setAmount] = useState(50);
    const [dateFrom, setDateFrom] = useState(new Date('2014-04-18'))
    const [dateTo, setDateTo] = useState(new Date('2017-08-18'))

    useEffect(() => {
      //fetch coins type to populate intial set of coin choices
      const fetchCoins = async() => {
        const coins =  await getCoins()
        setCoins(coins)
      }
      fetchCoins()
    }, []);

    const handleAmountChange = (event) => {
      // add data handling
      setAmount(event.target.value);
    }

    const handleSelectedCoinChange= (ticker) =>{
      setSelectedCoin(ticker)
    }

    const handleDateFromChange = (date) => {
      // add data handling
      setDateFrom(date);
    }

    const handleDateToChange = (date) => {
      // add data handling
      setDateTo(date);
    }

    const handleCalculateClick = () =>{
      const tradeHistory = {
        dateTo: dateTo,
        dateFrom: dateFrom,
        amount: amount,
        coinTicker: selectedCoin,
      }

      console.log(tradeHistory)
      getTransactionDetails(tradeHistory)
    }



    return(
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item align="center" xs>
          <h3 style={headerStyle}>Historical Crypto Cost Average</h3>
        </Grid>
  
        <Grid item align="center" xs>
          <h5 style={headerStyle} >See how rich you could have been</h5>
        </Grid>
  
        <Grid xs>
            <ScrollView onSelectedCoinChange={handleSelectedCoinChange} coins = {coins}/>
        </Grid>
  
        <Grid item align="center" xs>
          <TextField onBlur={handleAmountChange} id="standard-basic" label="Amount" />
        </Grid>
        
        <Grid item align="center" xs>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item align='center' xs>
              <DatePicker selectedDate ={dateFrom} onChange={handleDateFromChange}  label= "From"/>
            </Grid>
            <Grid item align='center' xs>
              <DatePicker selectedDate ={dateTo}  onChange={handleDateToChange}  label= "To"/>
            </Grid>
          </Grid>
        </Grid>
  
        <Grid item align="center" xs>
          <Button onClick={handleCalculateClick} size="large" variant="contained">Calculate</Button>
        </Grid>
      </Grid>
    )
  }

  export default CalcView