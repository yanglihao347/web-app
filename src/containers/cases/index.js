import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Inventorylist from '../inventoryList';

export default class Cases extends Component {
    render () {
        return (
            <div>
                <PageHeader title="箱子" />
                <Inventorylist type="cases" />
            </div>
        )
    }
}