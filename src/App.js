import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/general/NavBar';
import Home from './components/general/Home';

import SelectionSort from './components/sorting/selection/SelectionSort';
import BubbleSort from './components/sorting/bubble/BubbleSort';
import MergeSort from './components/sorting/merge/MergeSort';
import InsertionSort from './components/sorting/insertion/InsertionSort';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route path="/selection-sort">
            <SelectionSort />
          </Route>
          <Route path="/bubble-sort">
            <BubbleSort />
          </Route>
          <Route path="/insertion-sort">
            <InsertionSort />
          </Route>
          <Route path="/merge-sort">
            <MergeSort/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
