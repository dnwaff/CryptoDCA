import Navbar from 'react-bootstrap/Navbar'; 

const MainHeader = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>{props.title}</Navbar.Brand>
        </Navbar>
    );
  };

  export default MainHeader