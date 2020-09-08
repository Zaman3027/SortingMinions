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
import { HeapSort } from './Components/HeapSort';
function App() {


  return (
    <Router>
      <HOCProvider>
        <Header />
        <Switch>
          <Route path="/SortingMinions/" exact component={Home} />
          <Route path="/SortingMinions/quickSort" exact component={QuickSort} />
          <Route path="/SortingMinions/bubbleSort" exact component={BubbleSort} />
          <Route path="/SortingMinions/heapSort" exact component={HeapSort} />
        </Switch>
      </HOCProvider>
    </Router>
  );
}

export default App;
