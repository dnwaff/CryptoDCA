import Card from 'react-bootstrap/Card';

const PortfolioCard = (props) => {
    return (
      <Card
      bg={'info'}
      key={1}
      text={'white'}
      style={{ width: '16rem' }}
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

  export default PortfolioCard