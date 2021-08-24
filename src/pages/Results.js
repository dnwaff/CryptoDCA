import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from 'react';

import MainHeader from '../ui/components/Header/MainHeader'
import PortfolioCardView from '../ui/views/PortfolioCardView'
import { Typography } from '@material-ui/core';
import cardProps  from '../controller/CardInfo'

const Results = (props) => {
    const [cardInfo, setCardInfo] = useState([])

    useEffect(()=>{
      setCardInfo(cardProps(props.location.state))
    },[])

    const title = "Crypto DCA"
    return (
        <div className="app-body">
        <div style={{marginBottom: '25px'}}>
          <MainHeader title = {title}/>
        </div>
        <div>
          <Typography style={{marginBottom: '25px'}} align="center" variant='h2' > {props.location.state.coinName} </Typography>
          <PortfolioCardView cardInfo={cardInfo}/>
        </div>
      </div>
    );
}

export default Results