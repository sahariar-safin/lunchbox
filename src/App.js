import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      <div className={darkMode ? "dark" : "light"}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
