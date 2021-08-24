import PortfolioCard from '../components/PortfolioCard'
import Grid from '@material-ui/core/Grid';

const PortfolioCardView = (props) => {
    const cardProp = {
      title: "Percent Gains",
      description: "the amount of gains per transactions",
      amount: "100%"
    };
  
    return (
    <div style={{ justifyContent:'center', alignItems:'center', display:'flex'}}>
      <div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[0]} icon='0' info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[1]} icon='2' info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[2]} icon='1' info={cardProp}/>
          </Grid>
        </Grid>
        
        <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[3]} icon='2' info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[4]} icon='1' info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard cardInfo = {props.cardInfo[5]} icon='0' info={cardProp}/>
          </Grid>
        </Grid>
      </div>
    </div>
    );
  };

export default PortfolioCardView