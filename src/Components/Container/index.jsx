import React, {Component} from "react";
import {Layout, Menu} from "antd";
// import { UploadOutlined, UserOutlined, VideoCameraOutlined ,GithubOutlined} from '@ant-design/icons';

import {Link} from "react-router-dom";
import "./index.css";
import MyBreadcrumb from "./MyBreadcrumb";
import Main from "../Main";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
export default class Container extends Component {
    state = {
        menus: [
            {
                id: 1,
                navName: "nav1",
                path: "/home",
                children: [
                    {
                        id: 11,
                        navName: "nav2",
                        path: "/home",
                        children: [],
                    },
                    {
                        id: 12,
                        navName: "nav3",
                        path: "/home1",
                        children: [],
                    },
                    {
                        id: 13,
                        navName: "nav4",
                        path: "/home",
                        children: [],
                    },
                ],
            },
            {
                id: "2",
                navName: "nav2",
                path: "/home1",
                children: [],
            },
            {
                id: "3",
                navName: "nav3",
                path: "/home2",
                children: [],
            },
            {
                id: "4",
                navName: "nav4",
                path: "",
                children: [],
            },
        ],
    };
    showMenus = (menus) => {
        console.log(menus);
        return menus.map((item) => {
            if (item.children.length === 0) {
                return (
                    <Menu.Item icon={item.icon} key={item.id}>
                        <Link to={item.path}> {item.navName}</Link>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu icon={item.icon} title={item.navName} key={item.id}>
                        {this.showMenus(item.children)}
                    </SubMenu>
                );
            }
        });
    };

    render() {
        const {menus} = this.state;
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                    }}
                >
                    <div className="logo">
                        <img src="/logo192.png" alt="logo"></img>智慧巡查系统
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
                        {this.showMenus(menus)}
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{padding: 0}}
                    >
                        <MyBreadcrumb/>
                    </Header>
                    <Content style={{margin: "24px 16px 0"}}>
                        <div
                            className="site-layout-background"
                            style={{padding: 24, minHeight: 360}}
                        >
                            <Main/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Ant Design ©2021 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
