import { useState } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Show from "../../components/Categories/Show";
import Add from "../../components/Categories/Add";
import Edit from "../../components/Categories/Edit";

const Categories = () => {
    const [actions, setActions] = useState({
        show: false,
        add: false,
        edit: false,
        remove: false
    });
    const [id, setId] = useState(null);

    return (
        <>
            <Toolbar title="CATEGORIES" setActions={setActions} id={id} />
            {actions.show && <Show setId={setId} />}
            {actions.add && <Add setActions={setActions} />}
            {actions.edit && <Edit id={id} setActions={setActions} />}
        </>
    );
}

export default Categories;