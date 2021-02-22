const Fruits = (props) => {
    return (
        <div id='fruits'>
            <h3>Fruit list</h3>
            <ul>
            { props.fruits.map((fruit, index) => {
                return (
                    <li key={index}>{fruit}</li>
                )
            })
            }
            </ul>
        </div>
    )
};

export default Fruits;