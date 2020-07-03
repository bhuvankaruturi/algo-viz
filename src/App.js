import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import SelectionSort from './components/sorting/selection/SelectionSort';
import BubbleSort from './components/sorting/bubble/BubbleSort';
import MergeSort from './components/sorting/merge/MergeSort';
import InsertionSort from './components/sorting/insertion/InsertionSort';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/selection-sort">Selection Sort</Link>
        </li>
        <li>
          <Link to="/bubble-sort">Bubble Sort</Link>
        </li>
        <li>
          <Link to="/insertion-sort">Insertion Sort</Link>
        </li>
        <li>
          <Link to="/merge-sort">Merge Sort</Link>
        </li>
      </ul>
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
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
