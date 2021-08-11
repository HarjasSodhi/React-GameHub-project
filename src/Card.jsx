import { useEffect, useState } from "react";
// import "./card.css"
let Card = () => {
    const [CurrCard, setCurrCard] = useState({ suit: "", num: "" });
    const [Cards, setCards] = useState([]);
    const [CurrScore, setCurrScore] = useState(0);
    let colors = {
        "♠": "black", "♣": "black", "♥": "red", "♦": "red"
    }
    const CardValue = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    const suits = ["♠", "♣", "♥", "♦"];
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    class Deck {
        constructor(suit, num) {
            this.suit = suit;
            this.num = num;
        }
    }

    function createDeck() {
        let DeckArr = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                DeckArr.push(new Deck(suits[i], numbers[j]));
            }
        }
        shuffleDeck(DeckArr);
        shuffleDeck(DeckArr);
        shuffleDeck(DeckArr);
        shuffleDeck(DeckArr);
        setCurrCard(generateCard(DeckArr));
        return DeckArr;
    }

    function shuffleDeck(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            let idx = Math.floor(Math.random() * arr.length);
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    function generateCard(arr) {
        console.log(arr.length);
        let idx = Math.floor(Math.random() * arr.length);
        let temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[idx];
        arr[idx] = temp;
        return arr.pop();
    }

    useEffect(() => {
        setCards(createDeck());
    }, []);

    return (
        <>
            <div className="HiLowscore">Score: {CurrScore}</div>
            <div className="Cardcontainer">
                <div className="currCard">
                    <div className={`suit ${colors[CurrCard.suit]}`}>{CurrCard.suit}</div>
                    <div className={`value ${colors[CurrCard.suit]}`}>{CurrCard.num}</div>
                    <div className={`rev-suit ${colors[CurrCard.suit]}`}>{CurrCard.suit}</div>
                </div>
                <div className="HiLowbtn-container">
                    <div className="high" onClick={
                        () => {
                            let temp = CurrCard;
                            if (Cards.length == 0) {
                                alert("Deck is empty. Refresh page to Start a New Game. Your Final Score is: " + CurrScore);
                                return;
                            }
                            let newCard = generateCard(Cards);
                            setCurrCard(newCard);
                            setCards(Cards);
                            if (CardValue[temp.num] <= CardValue[newCard.num]) {
                                setCurrScore((CurrScore + 1));
                            }
                            else {
                                setCurrScore((CurrScore - 1));
                            }
                        }
                    }><span className="material-icons">
                            play_arrow
                        </span></div>
                    <div className="low" onClick={
                        () => {
                            let temp = CurrCard;
                            if (Cards.length == 0) {
                                alert("Deck is empty. Refresh page to Start a New Game Your Final Score is: " + CurrScore);
                                return;
                            }
                            let newCard = generateCard(Cards);
                            setCurrCard(newCard);
                            setCards(Cards);
                            if (CardValue[temp.num] >= CardValue[newCard.num]) {
                                setCurrScore((CurrScore + 1));
                            }
                            else {
                                setCurrScore((CurrScore - 1));
                            }
                        }
                    }><span className="material-icons">
                            play_arrow
                        </span></div>
                </div>
            </div>
        </>
    )
}
export default Card;