import React, {Component} from "react";
import {test} from "@/api/test.js";

export default class Home extends Component {
    componentDidMount() {
        console.log(1);
        test({username: "admin", password: "123456"}).then((res) => {
            console.log(res);
        });
    }

    render() {
        return <div>123</div>;
    }
}
