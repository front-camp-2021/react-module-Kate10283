import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/slider.css";
import CardList from "./CardList/CardList";
import WishList from "./WishList/WishList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/card-list">
                            <CardList />
                        </Route>
                        <Route exact path="/wish-list">
                            <WishList />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/card-list" />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
