import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, PageHeader } from 'antd';
import { Route, Link } from 'react-router-dom';
import CSGOkeys from '../csgokeys';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Inventory extends Component {
    render () {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['other']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <Menu.Item key="1">
                        <Link to="/inventory/csgokeys" >
                            <span>
                                <Icon type="user" />
                                钥匙
                            </span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="other"
                        title={
                        <span>
                            <Icon type="laptop" />
                            其他
                        </span>
                        }
                    >
                        <Menu.Item key="all">
                            <Link to='/inventory/all'>
                             全部
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">option6</Menu.Item>
                        <Menu.Item key="4">option7</Menu.Item>
                        <Menu.Item key="5">option8</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    <Route path="/inventory/csgokeys" component={CSGOkeys}></Route>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}