import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login/"> <Login {...props} /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;