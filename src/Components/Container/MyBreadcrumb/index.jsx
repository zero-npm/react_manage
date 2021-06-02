import React, {Component} from "react";
import {Breadcrumb} from "antd";

export default class MyBreadcrumb extends Component {
    state = {
        breadcrumbList: [{id: 1, name: "路由1", path: "", component: ""}],
    };
    render() {
        const {breadcrumbList} = this.state;
        return (
            <div style={{marginLeft: "16px"}}>
                <Breadcrumb>
                    {breadcrumbList.map((item) => {
                        return <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>;
                    })}
                </Breadcrumb>
            </div>
        );
    }
}
