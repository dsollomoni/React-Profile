import './App.css';
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/navbar"
import AboutMe from './pages/about-me';
import Footer from "./components/footer"
import Portfolio from './pages/portfolio';
import Contact from './pages/contact'
import Resume from './pages/resume'


function App() {
  return (
    <div id = "App" className = "w-100">
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path= "/" component= {AboutMe}/>
       <Route path= "/portfolio" component= {Portfolio}/>
       <Route path= "/contact" component= {Contact}/>
       <Route path= "/resume" component= {Resume}/>
     </Switch>
     <Footer/> 
    </Router>
    </div>
  );
}

export default App;
