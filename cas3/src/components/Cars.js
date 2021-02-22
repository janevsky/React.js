const cars = (props) => {
    return (        
        <div id='Cars'>
            <h3>Cars</h3>
            <ul>
            { props.cars.map((car, index) => {
                return (
                    <li key={index}>{car.brand} {car.model} {car.year} {car.plate.city} {car.plate.number}</li>
                )
                
            })}
            </ul>
        </div>
    )
};

export default cars;