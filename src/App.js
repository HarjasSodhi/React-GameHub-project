import MainPage from "./Home/MainPage";
import TicTacToe from "./TicTacToe/TicTacToe";
import HiLow from './Hi-Low/HiLow';
import SudokuGrid from "./Sudoku/SudokuGrid"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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