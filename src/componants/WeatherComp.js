

function WeatherComp (props) {
    

    return (

        <div>
           <h4>temperature: {props.temperature}</h4>
           <h5>city: {props.city}</h5>
           <p>country: {props.country}</p>
           <p>humidity: {props.humidity}</p>
           <p>description: {props.description}</p>
           <p>{props.errors}</p>
        </div>

    )
}


export default WeatherComp;
