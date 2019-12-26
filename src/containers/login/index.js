/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, message } from 'antd';
import md5 from 'blueimp-md5';
import { connect } from 'react-redux';
import { login } from '../../redux/actions'

class Login extends Component {

  login = () => {
    this.props.login({username: 'abc',password: '123451' }).then((data) => {
      if(data.success) {
        message.success(data.msg);
      } else {
        message.error(data.msg);
      }
    });
  }
    
  render () {

    return (
      <div>
        <PageHeader title="登录" />
        <Button onClick={() => { this.login() }}>登录</Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    username: state.username,
    _id: state._id,
    type: state.type,
  }
}

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);