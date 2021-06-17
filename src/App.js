import './App.css';
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/navbar"
import AboutMe from './pages/about-me';
import Footer from "./components/footer"
import Portfolio from './pages/portfolio';


function App() {
  return (
    <div id = "App" className = "w-100">
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path= "/" component= {AboutMe}/>
       <Route path= "/portfolio" component= {Portfolio}/>
     </Switch>
     <Footer/> 
    </Router>
    </div>
  );
}

export default App;
