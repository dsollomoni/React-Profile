import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/navbar"
import AboutMe from './pages/about-me';
import Footer from "./components/footer"
import Portfolio from './pages/portfolio';
import Contact from './pages/contact'
import Resume from './pages/resume'


function App() {
  return (
    <div id = "App" className = "w-100 h-" >
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path= "/React-Profile/" component= {AboutMe}/>
       <Route path= "/React-Profile/portfolio" component= {Portfolio}/>
       <Route path= "/React-Profile/contact" component= {Contact}/>
       <Route path= "/React-Profile/resume" component= {Resume}/>
     </Switch>
    </Router>
    <Footer/> 
    </div>
  );
}

export default App;
