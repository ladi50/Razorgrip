import { useDispatch } from "react-redux";
import { removeLocation } from "../../js/actions/location";
import { removeCategory } from "../../js/actions/category";
import "./Toolbar.css";

const Toolbar = ({ title, setActions, id }) => {
    const dispatch = useDispatch();

    const dispatchAction = e => {
        switch (e.target.innerHTML) {
            case "Show":
                return setActions({
                    show: true,
                    add: false,
                    edit: false,
                    remove: false
                });
            case "Add":
                return setActions({
                    show: false,
                    add: true,
                    edit: false,
                    remove: false
                });
            case "Edit":
                if (!id) return;
                return setActions({
                    show: false,
                    add: false,
                    edit: true,
                    remove: false
                });
            case "Remove":
                if (!id) return;
                if (title === "LOCATIONS") {
                    dispatch(removeLocation(id));
                } else if (title === "CATEGORIES") {
                    dispatch(removeCategory(id));
                } else return;
                return setActions({
                    show: true,
                    add: false,
                    edit: false,
                    remove: false
                });
            default:
                return;
        }
    }

    return (
        <div className="toolbar">
            <div className="toolbar__title">{title}</div>
            <div className="toolbar__buttons">
                <button onClick={dispatchAction}>Show</button>
                <button onClick={dispatchAction}>Add</button>
                <button onClick={dispatchAction}>Edit</button>
                <button onClick={dispatchAction}>Remove</button>
            </div>
        </div>
    );
};

export default Toolbar;