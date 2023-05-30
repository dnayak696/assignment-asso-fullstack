import logo from './logo.svg';
import './App.css';
import Header from './components/haeder';
import Container from './components/container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateMovie from './components/createMovie';



function App() {


  
  


  return (
    <div className="App">
      <Router>
      <Header/>


<Switch>
  <Route  path="/" exact>
       <Container/> 

    </Route>

    <Route path="/create-movie" exact> 
      <CreateMovie/>
    </Route>

</Switch>
      </Router>
      

    </div>
  );
}

export default App;
