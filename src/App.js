import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react';

// header
import Navbar from 'react-bootstrap/Navbar'; 

//Card
import Card from 'react-bootstrap/Card';

//Grid
import Grid from '@material-ui/core/Grid';

//scroll view
import HorizontalScroll from 'react-scroll-horizontal';

//button
import Button from '@material-ui/core/Button';

//Divider
import Divider from '@material-ui/core/Divider'

//textView
import TextField from '@material-ui/core/TextField'

//datepicker
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const DatePick = (props) =>{
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        margin="normal"
        id="date-picker-dialog"
        label={props.label}
        format="MM/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )

}
const CalcView = (props) => {
  return(
    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
      <Grid item align="center" xs>
        <h3>Historical Crypto Cost Average</h3>
      </Grid>
      <Grid item align="center" xs>
        <h5>See how rich you could have been</h5>
      </Grid>
      <Grid item align="center" xs>
        <TextField id="standard-basic" label="Amount" />
      </Grid>
      <Grid item align="center" xs>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item align='center' xs>
            <DatePick label= "From"/>
          </Grid>
          <Grid item align='center' xs>
            <DatePick label= "To"/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item align="center" xs>
        <Button variant="contained">Calculate</Button>
      </Grid>
    </Grid>
    // <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
    //   <div>
    //     <TextField id="standard-basic" label="Amount" />
    //   </div>
    //   <div>
    //     <Button variant="contained">Calculate</Button>
    //   </div>
    // </div>
  )
}

const DcaButton = (props) =>{
  const style = {
    height: '3em',
    width: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex"
  }
  return (
    <div style={style} >
      <Button 
      size="medium" 
      variant="outlined" 
      color="primary"
      onClick= {props.onClick}
      >
        {props.name}
      </Button>
    </div>
  );
};

const ScrollHeader = (props) => {
  return (
    <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
      <h3>{props.header}</h3>
    </div>
  )
}

const ScrollView = (props) => {
  const [header, setHeader] = useState('Bitcoin');
  
  const handleClick = (name) => {
    setHeader(name)
  }

  return( 
    <div style={{ height: `3em` }}>
      <ScrollHeader header={header}/>
      <Divider/>
      <HorizontalScroll>
        {props.coins.map(function (name){
          return <DcaButton onClick= {() => handleClick(name)} 
                            name = {name}
                            />;
        })}
      </HorizontalScroll>
      <Divider/>
    </div>
  );
};

const Header = (props) => {
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{props.title}</Navbar.Brand>
      </Navbar>
  );
};

const CardView = (props) => {
  return (
    <Card
    bg={'info'}
    key={1}
    text={'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{props.info.title}</Card.Header>
    <Card.Body>
      <Card.Title>{props.info.description} </Card.Title>
      <Card.Text>{props.info.amount}</Card.Text>
    </Card.Body>
  </Card>
  );
};

const CardLayout = (props) => {
  const cardProp = {
    title: "Percent Gains",
    description: "the amount of gains per transactions",
    amount: "100%"
  };

  return (
  <div>
    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
    </Grid>
    
    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
      <Grid item align="center" xs>
        <CardView info={cardProp}/>
      </Grid>
    </Grid>

  </div>
  );
};

function App() {
  const title = 'Crypto DCA';
  const coins = ['btc', 'ada', 'ltc', 'eth', 'bnb', 'dot', 'link']
  return (
    <div className="MyApp">
      <Header title = {title}/>
      <CalcView/>
      <ScrollView coins = {coins}/>
    </div>
  );
}

export default App;
