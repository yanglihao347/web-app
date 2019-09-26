import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Inventorylist from '../inventoryList';

export default class Stickers extends Component {
    render () {
        return (
            <div>
                <PageHeader title="贴纸" />
                <Inventorylist type="stickers" />
            </div>
        )
    }
}