import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './pages/Home'
import Results from './pages/Results'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"



function App() {
  return(
    <Router>
      <Switch>
        <Route path='/results' component={Results}/>
        <Route path='/' exact component={Home}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    
  )
}

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default App;
