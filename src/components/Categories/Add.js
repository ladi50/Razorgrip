import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCategory } from "../../js/actions/category";

const Add = ({ setActions }) => {
    const [category, setCategory] = useState({
        name: ''
    });

    const dispatch = useDispatch();

    const submitForm = e => {
        e.preventDefault();

        dispatch(addCategory(category));

        setActions({
            show: true,
            add: false,
            edit: false,
            remove: false
        });
    }

    if (!category) return "Loading...";

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={category.name} onChange={e => setCategory({ name: e.target.value })}
                   required />

            <button>Add</button>
        </form>
    )
};

export default Add;