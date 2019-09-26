import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, PageHeader } from 'antd';
import { Route, Link } from 'react-router-dom';
import CSGOkeys from '../csgokeys';
import All from '../all';
import Cases from '../cases';
import Stickers from '../stickers';
import Weapons from '../weapons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Inventory extends Component {
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     state1: 'state1',
    //   }
    // }

    componentDidMount() {
      console.log(this.props);
    }
    render () {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['key']}
                    defaultOpenKeys={['other']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <Menu.Item key="key">
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
                        <Menu.Item key="case">
                            <Link to='/inventory/cases'>
                             箱子/胶囊
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="sticker">
                            <Link to='/inventory/stickers'>
                             印花/贴纸
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="weapon">
                            <Link to='/inventory/weapons'>
                             武器/手套
                            </Link>
                        </Menu.Item>
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
                    <Route path="/inventory/all" component={All}></Route>
                    <Route path="/inventory/cases" component={Cases}></Route>
                    <Route path="/inventory/stickers" component={Stickers}></Route>
                    <Route path="/inventory/weapons" component={Weapons}></Route>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}