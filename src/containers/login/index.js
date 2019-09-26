import React, { Component } from 'react';
import { PageHeader } from 'antd';
import md5 from 'blueimp-md5';

export default class Login extends Component {
    
    render () {
        console.log(md5('avnc'));
        return (
            <div>
                <PageHeader title="登录" />
            </div>
        )
    }
}