import MainPage from "./MainPage";
import TicTacToe from "./TicTacToe";
import HiLow from './HiLow';
import SudokuGrid from "./SudokuGrid"
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sudoku">
          <SudokuGrid />
        </Route>
        <Route path="/HiLow">
          <HiLow />
        </Route>
        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;