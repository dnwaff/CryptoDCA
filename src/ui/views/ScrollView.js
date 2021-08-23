import React, {useState} from 'react';
import Divider from '@material-ui/core/Divider'
import HorizontalScroll from 'react-scroll-horizontal';
import DcaButton from '../components/Buttons/DcaButton';
import ScrollHeader from '../components/Header/ScrollHeader';

const ScrollView = (props) => {
    const [header, setHeader] = useState('Bitcoin');
    
    const handleClick = (coin) => {
      const ticker = coin[0] + '-' + coin[1]
      const name = coin[1]
      setHeader(name)
      props.onSelectedCoinChange(ticker)
    }
  
    return( 
      <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '40px'}}>
        <div style={{ height: `3em` , width: '600px'}}>
          <ScrollHeader header={header}/>
          <Divider/>
          <HorizontalScroll>
            {props.coins.map(function (coin){
              return <DcaButton onClick= {() => handleClick(coin)} 
                                symbol = {coin[0]}
                                name = {coin[1]}
                                />;
            })}
          </HorizontalScroll>
          <Divider/>
        </div>
      </div>
    );
  };

export default ScrollView