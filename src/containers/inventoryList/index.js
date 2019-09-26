import React, { Component } from 'react';
import { PageHeader, Table } from 'antd';
import axios from 'axios';

export default class Inventorylist extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dataSource: []
      }
    }

    componentDidMount() {
      console.log(this.props.type);
      axios.get('http://jsonplaceholder.typicode.com/users').then(
        (data) => {
          console.log(data);
          this.setState({
            dataSource: data.data
          })
        }
        
      );
    }

    renderTable() {
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '用户名',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
      ]
      return (
        <Table dataSource={this.state.dataSource} columns={columns} />
      )
    }

    render () {
        return (
            <div>
                <PageHeader title={this.props.type + '库存列表'} />
                {this.renderTable()}
            </div>
        )
    }
}