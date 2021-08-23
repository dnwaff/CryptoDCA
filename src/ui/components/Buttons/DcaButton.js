import Button from '@material-ui/core/Button';

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
          {props.symbol}
        </Button>
      </div>
    );
  };
  
export default DcaButton;