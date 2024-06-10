

function WeatherComp (props) {
    

    return (

        <>
           {props.temperature}
           {props.city}
           {props.country}
           {props.humidity}
           {props.description}
           {props.errors}
        </>

    )
}


export default WeatherComp;
