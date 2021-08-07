import { useState } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Show from "../../components/Locations/Show";
import Add from "../../components/Locations/Add";
import Edit from "../../components/Locations/Edit";

const Locations = () => {
    const [actions, setActions] = useState({
        show: false,
        add: false,
        edit: false,
        remove: false
    });
    const [id, setId] = useState(null);

    return (
        <>
            <Toolbar title="LOCATIONS" setActions={setActions} id={id} />
            {actions.show && <Show setId={setId} />}
            {actions.add && <Add setActions={setActions} />}
            {actions.edit && <Edit id={id} setActions={setActions} />}
        </>
    );
}

export default Locations;