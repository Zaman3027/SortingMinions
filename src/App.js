import React from 'react';
import { HOCProvider } from './Components/HOC'
import Header from './Components/Header';
import { Home } from './Components/Home';
import QuickSort from './Components/QuickStort'
import BubbleSort from './Components/BubbleSort'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {


  return (
    <Router>
      <HOCProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quickSort" exact component={QuickSort} />
          <Route path="/bubbleSort" exact component={BubbleSort} />
        </Switch>
      </HOCProvider>
    </Router>
  );
}

export default App;
