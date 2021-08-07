import { useDispatch, useSelector } from "react-redux";
import { sortLocations, sortLocationsByCategory } from "../../js/actions/location";
import { useEffect, useState } from "react";
import "./Filter.css";

const Filter = () => {
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const categories = useSelector((store) => store.categories.categories);

    useEffect(() => {
        dispatch(sortLocationsByCategory(category));
    }, [category, dispatch]);

    const sort = () => {
        dispatch(sortLocations());
    };

    return (
        <div className="filter">
            <button onClick={sort}>Sort Alphabetical</button>

            <label htmlFor="category">Category</label>
            <select name="category" onChange={e => setCategory(e.target.value)} value={category}>
                {
                    categories?.length && categories.map(item => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))
                }
            </select>
        </div>
    )
};

export default Filter;