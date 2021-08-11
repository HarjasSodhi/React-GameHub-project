import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Deck from "./Deck"
import Card from "./Card"
// import "./hilow.css"
function HiLow() {
    return (
        <div className='hiLowContainer'>
        <Router>
            <Switch>
                <Route path="/card"><Card /></Route>
                <Route path="/HiLow"><Deck /></Route>
            </Switch>
        </Router>
        </div>
    );
}
export default HiLow;