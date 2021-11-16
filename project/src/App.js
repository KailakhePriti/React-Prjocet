import './App.css';

import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import About from './components/About';
import React, { useEffect ,useState } from "react";
import Home from './components/Home';
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
   
  }
 
  return (
    <Router>
      <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/home">
            <Home mode={mode} />
          </Route>

          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/Text">
            <Text mode={mode} heading={'Enter your text here'} showAlert={showAlert} />
          </Route>

          <Route exact path="/Register">
            <Register mode={mode}/>
          </Route>

         
        </Switch>
              {/* A <Switch> looks through its children <Route>s and
                          renders the first one that matches the current URL. */}


              {/* <Calculator/> */}

      </div>
     
    </Router>
  );
}         
export default App;
