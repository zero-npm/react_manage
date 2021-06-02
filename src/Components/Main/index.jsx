import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import Home1 from "./Home1";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/home1" component={Home1}></Route>
                </Switch>
            </div>
        );
    }
}
