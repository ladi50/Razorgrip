import { useEffect } from "react";
import store from "../../js/store";

const Show = ({ setId }) => {
    const categories = store.getState().categories.categories;

    useEffect(() => {
        setId(null);
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories, setId]);

    if (!categories || categories.length === 0) return "No categories found.";

    return (
        <>
            <ul>
                {categories?.length && categories.map(item => (
                    <li key={item.id}>
                        <input type="radio" id={item.id} name="categories" value={item.id}
                               onClick={() => setId(item.id)} />
                        <label htmlFor={item.id}>{item.name}</label>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Show;