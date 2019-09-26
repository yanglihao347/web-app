import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Inventorylist from '../inventoryList';

export default class CSGOkeys extends Component {
    render () {
        return (
            <div>
                <PageHeader title="钥匙" />
                <Inventorylist type="csgokeys" />
            </div>
        )
    }
}