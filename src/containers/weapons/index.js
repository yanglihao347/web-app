import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Inventorylist from '../inventoryList';

export default class Weapons extends Component {
    render () {
        return (
            <div>
                <PageHeader title="武器" />
                <Inventorylist type="weapons"/>
            </div>
        )
    }
}