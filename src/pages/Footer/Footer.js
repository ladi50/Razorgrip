import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = () => {
    const [disabledLink, setDisabledLink] = useState(true);
    const categories = useSelector(store => store.categories.categories);

    useEffect(() => {
        categories?.length > 0 ? setDisabledLink(false) : setDisabledLink(true);
    }, [categories])

    const isDisabled = (e) => {
        disabledLink && e.preventDefault();
    }

    return ReactDOM.createPortal(
        <div className="footer">
            <NavLink to="/locations" onClick={isDisabled}>LOCATIONS</NavLink>
            <NavLink to="/categories">CATEGORIES</NavLink>
        </div>
        , document.getElementById("footer")
    );
}

export default Footer;