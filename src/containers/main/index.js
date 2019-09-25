import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import './index.scss';

import Inventory from '../inventory';
import Order from '../order';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Main extends Component {
    render () {
        return (
            <Layout>
                <Header className="header">
                <div className="logo" >库存管理系统</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['inventory']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="inventory">
                      <Link to="/inventory/csgokeys">库存</Link>
                    </Menu.Item>
                    <Menu.Item key="order">
                      <Link to="/order">订单</Link>
                    </Menu.Item>
                </Menu>
                </Header>
                <Route path="/inventory" component={Inventory}></Route>
                <Route path="/order" component={Order}></Route>
            </Layout>
        )
    }
}