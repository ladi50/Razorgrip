import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withScriptjs(withGoogleMap(({ isMarkerShown, coordinates, setCoords }) =>
<GoogleMap
    onClick={e => setCoords && setCoords(e)}
    defaultZoom={8}
    defaultCenter={coordinates ? { lat: coordinates.lat, lng: coordinates.lng } : { lat: -34.397, lng: 150.644 }}
>
    {isMarkerShown && <Marker
        position={coordinates ? { lat: coordinates.lat, lng: coordinates.lng } : { lat: -34.397, lng: 150.644 }} />}
</GoogleMap>
))
;

export default Map;