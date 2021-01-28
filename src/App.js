

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import components
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import MailList from './MailList';



function App() {
  return (
    <Router>


      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />


          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <MailList />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
