import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './pages/Home'
import Results from './pages/Results'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"



function App() {
  return(
    <Router>
      <Switch>
        <Route path='/results' component={Results}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    
  )
}

export default App;
