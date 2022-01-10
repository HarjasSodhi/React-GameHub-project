// import "./deck.css"
import { Redirect,Link } from "react-router-dom";
let Deck = () => {
    return (
        <>
            <Link to="/card">
                <img className="deck-img" src="https://i.pinimg.com/564x/04/be/a8/04bea83ae8203e2a68b78696d35f8d18.jpg" />
            </Link>
        </>
    )
}
export default Deck;