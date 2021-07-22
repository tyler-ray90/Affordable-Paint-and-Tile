import './App.css';

// Router from React Domg
import {Route, Switch, Link} from 'react-router-dom';

// Imported Pages
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <header>
      Affordable Paint and Tile
      </header>
      <Switch>
      <Route path='/contact'>
      <Contact/>
      </Route>
      <Route path='/homepage'>
      <HomePage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
