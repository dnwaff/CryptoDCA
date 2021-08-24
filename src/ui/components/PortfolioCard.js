import { createElement , useEffect } from 'react'
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import GradeIcon from '@material-ui/icons/Grade';

const PortfolioCard = (props) => {
    const {category, text, result} = props.cardInfo || {category:'none', text: 'none', result: 'none'}
    const icon = props.icon || 0
    
    const style = {
      height: '350px',
      width: '450px'
    }

    const chooseIcon = (num) =>{
      const array = [<GradeIcon/>, <ShowChartIcon/>, <CardMembershipIcon/>]
      return ( 
        array[num]
      )
    }

    return (
        <Card style={style} variant="outlined">
        <CardContent align="left">
          {chooseIcon(icon)}
        </CardContent>
        <CardContent>
          <Typography  variant="h4" gutterBottom>
            {category}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {text}
          </Typography>
          
        </CardContent>
        <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>
        <CardContent>
          <Typography align='center'  variant="h3" color="primary">
              {result}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  export default PortfolioCard