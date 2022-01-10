let IndexBar = (props) => {
    let arr = []
    for (let i = 1; i <= 9; i++) {
        arr.push(i);
    }
    return (
        <div className={`${props.selector}`}>
            {
                arr.map((el) => {
                    return (
                        <div>{el}</div>
                    )
                })
            }
        </div>
    )
}
export default IndexBar;