import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editLocation, getLocation } from "../../js/actions/location";
import store from "../../js/store";
import Map from "../Map/Map";

const Edit = ({ id, setActions }) => {
    const [location, setLocation] = useState(null);
    const [categories, setCategories] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getLocation(id));
            const location = store.getState().locations.location;
            setLocation(location);

            const categories = store.getState().categories.categories;
            setCategories(categories);
        }
    }, [dispatch, id]);

    const setLocationData = e => {
        const { value, name } = e.target;

        if (name === "lat" || name === "lng") {
            return setLocation(prevState => {
                return {
                    ...prevState,
                    coordinates: {
                        ...prevState.coordinates,
                        [name]: parseFloat(value)
                    }
                }
            });
        }

        setLocation(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const setCoords = e => {
        setLocation(prevState => (
            {
                ...prevState,
                coordinates: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                }
            }
        ))
    };

    const submitForm = e => {
        e.preventDefault();

        dispatch(editLocation(location));

        setActions({
            show: true,
            add: false,
            edit: false,
            remove: false
        });
    }

    if (!location) return "Loading...";

    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={location.name} onChange={setLocationData} required />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" value={location.address} onChange={setLocationData} required />

                <label htmlFor="lat">Latitude</label>
                <input type="number" name="lat" step="0.01" value={location.coordinates.lat} onChange={setLocationData}
                       required />

                <label htmlFor="lng">Longitude</label>
                <input type="number" name="lng" step="0.01" value={location.coordinates.lng} onChange={setLocationData}
                       required />

                <label htmlFor="category">Category</label>
                <select name="category" value={location.category || ""} onChange={setLocationData} required>
                    <option disabled value=""> -- Select a category --</option>
                    {
                        categories?.length && categories.map(item => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))
                    }
                </select>

                <button>Edit</button>
            </form>

            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ width: "fit-content", margin: "0 auto" }} />}
                mapElement={<div style={{ height: `200px`, width: "300px" }} />}
                setCoords={setCoords}
                coordinates={location.coordinates}
            />
        </>
    )
};

export default Edit;