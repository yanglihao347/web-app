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

export default class Download extends Component {
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
            <div>
                <a download="轻听" href="https://test002-0906.oss-cn-hangzhou.aliyuncs.com/%E8%BD%BB%E5%90%AC2.mp4?Expires=1577209354&OSSAccessKeyId=TMP.hixuAEwk54ptAsMGCThqoVsCnsk19vGbT699yxmFuW8t8n7ukZp4qXqNjYCa1LSEbZ3ktjF44TyvBhbx27Batc2F1jt3YojtrbtfwXETKfcCjCdaFEHGmqFmFwTpFC.tmp&Signature=wfolYoOhII7pbOT24rkA4%2BkS2DI%3D">下载轻听.mp4</a>
            </div>
        )
    }
}