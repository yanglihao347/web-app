import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import md5 from 'blueimp-md5';
import { reqLogin } from '../../api';

export default class Login extends Component {
    
    render () {

        return (
            <div>
                <PageHeader title="登录" />
                <Button onClick={() => { reqLogin({username: 'abcxx',password: '12345' }) }}>登录</Button>
            </div>
        )
    }
}