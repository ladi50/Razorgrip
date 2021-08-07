import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Categories from "./pages/Categories/Categories";
import Locations from "./pages/Locations/Locations";
import "./App.css";

const App = () => {
    const categories = useSelector(store => store.categories.categories);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/categories" exact>
                    <Categories />
                </Route>
                <Route path={!categories?.length ? "/" : "/locations"} exact>
                    <Locations />
                </Route>
                <Redirect to="/" exact />
            </Switch>

            <Footer />
        </BrowserRouter>
    )
}

export default App;