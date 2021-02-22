const LicensePlates = (props) => {
    return (
        <div id='licensePlates'>
            <h3>Licese plates</h3>
            <ul>
                {props.plates.map((plate, index) => {
                    return (
                        <li key={index}>{plate.city} {plate.number}</li>
                    )
                })
                }
            </ul>
        </div>
    );
};

export default LicensePlates;