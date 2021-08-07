import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editCategory, getCategory } from "../../js/actions/category";
import store from "../../js/store";

const Edit = ({ id, setActions }) => {
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getCategory(id));
            const category = store.getState().categories.category;
            setCategory(category);
        }
    }, [dispatch, id]);

    const submitForm = e => {
        e.preventDefault();

        dispatch(editCategory(category));

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

            <button>Edit</button>
        </form>
    )
};

export default Edit;