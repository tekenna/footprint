import './App.css';
// import Home from "./pages/Home/Home"
import Calculators from './pages/Calcbody/Calcbody';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" component={Calculators} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
