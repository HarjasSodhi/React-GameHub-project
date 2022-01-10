import { useState } from "react";

let NumBar = (props) => {
    let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [OldTarget, setOldTarget] = useState(undefined);
    return (
        <div className="numBar">
            {
                Arr.map((el) => {
                    return <div className="Sudokunum" onClick={(e) => {
                        if (OldTarget) {
                            OldTarget.style.color = "white";
                            OldTarget.style.backgroundColor = "#31011f"
                        }
                        setOldTarget(e.currentTarget);
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.backgroundColor = "green"
                        props.setcurrNum(e.currentTarget.innerText);
                    }}>{el}</div>
                })
            }
        </div>
    )
}
export default NumBar;