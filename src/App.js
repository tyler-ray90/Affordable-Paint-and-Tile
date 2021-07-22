import './App.css';

// Router from React Domg
import {Route, Switch, Link} from 'react-router-dom';

// Imported Pages
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <header>
      This is the header
      </header>
      <Switch>
      <Route path='/contact'>
      <Contact/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
