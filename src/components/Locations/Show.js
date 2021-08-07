import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLocations } from "../../js/actions/location";
import Filter from "./Filter";
import Location from "./Location";

const Show = ({ setId }) => {
    const locations = useSelector(store => store.locations.locations);
    const filteredLocations = useSelector(store => store.locations.filteredLocations);
    const dispatch = useDispatch();

    useEffect(() => {
        setId(null);
        dispatch(showLocations());
        localStorage.setItem("locations", JSON.stringify(locations));
    }, [locations, setId, dispatch]);

    if (!locations || locations.length === 0) return "No locations found.";

    return (
        <>
            <Filter />
            <ul>
                {filteredLocations?.length && filteredLocations.map(item => (
                    <Location key={item.id} item={item} setId={setId} />
                ))}
            </ul>
        </>
    );
};

export default Show;