import { useState } from "react";
import Map from "../Map/Map";

const Location = ({ item, setId }) => {
    const [details, setDetails] = useState(false);
    const [map, setMap] = useState(false);

    const showDetails = () => {
        setMap(false)
        setDetails(prevState => !prevState);
    };

    const showMap = () => {
        setDetails(false);
        setMap(prevState => !prevState)
    };

    return (
        <>
            <li>
                <input type="radio" id={item.id} name="locations" value={item.id}
                       onClick={() => setId(item.id)} />
                <label htmlFor={item.id}>{item.name}</label>
            </li>

            <button onClick={showDetails}>Details</button>
            <button onClick={showMap}>Map</button>
            {
                details
                &&
                <ol>
                    <li>Name: {item.name}</li>
                    <li>Address: {item.address}</li>
                    <li>Latitude: {item.coordinates.lat}</li>
                    <li>Longitude: {item.coordinates.lng}</li>
                    <li>Category: {item.category}</li>
                </ol>
            }

            {
                map &&
                <Map
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: "fit-content" }} />}
                    mapElement={<div style={{ height: `200px`, width: "300px" }} />}
                    coordinates={item.coordinates}
                />
            }

            <hr style={{ marginTop: "10px" }} />
        </>
    )
};

export default Location;