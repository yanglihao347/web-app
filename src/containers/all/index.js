import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Inventorylist from '../inventoryList';

export default class All extends Component {
    render () {
        return (
            <div>
                <PageHeader title="全部" />
                <Inventorylist type="all" />
            </div>
        )
    }
}