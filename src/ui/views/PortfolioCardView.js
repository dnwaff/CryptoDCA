import PortfolioCard from '../components/PortfolioCard'
import Grid from '@material-ui/core/Grid';

const PortfolioCardView = (props) => {
    const cardProp = {
      title: "Percent Gains",
      description: "the amount of gains per transactions",
      amount: "100%"
    };
  
    return (
    <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
      <div style={{width: '800px'}}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
        </Grid>
        
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
          <Grid item align="center" xs>
            <PortfolioCard info={cardProp}/>
          </Grid>
        </Grid>
      </div>
    </div>
    );
  };

export default PortfolioCardView