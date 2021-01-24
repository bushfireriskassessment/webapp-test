import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Assessment from './components/pages/Assessment';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/assessment' component={Assessment}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
