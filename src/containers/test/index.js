/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, message, Drawer, Tag } from 'antd';
// import md5 from 'blueimp-md5';
import { connect } from 'react-redux';
import './index.scss';

const { CheckableTag } = Tag;

class Test extends Component {

  state = {
    visible: false,
    checked: false,
  }
    
  render () {

    return (
      <div>
        <PageHeader title="测试" />
        <img
          id="img"
          src="http://bbs.mf8-china.com/forum.php?mod=attachment&aid=MjUzNzk0fDdiYzkyMTVkfDE1NzcyNTYwMjd8MHwxMDUwMzk%3D&noupdate=yes"
        />
        <img src="http://json.image.alimmdn.com/vsou.png" />
        <img src="https://test003-0106.oss-cn-hangzhou.aliyuncs.com/F2L_19.gif" />
        <button id="rChange">随机切换</button>
        <button id="showBtn" onClick={() => this.setState({ visible: true })}>显示/隐藏 公式</button>
        <Drawer
          title="abc"
          placement="left"
          visible={this.state.visible}
          width="700"
          onClose={() => this.setState({
            visible: false,
          })}
        >
          <CheckableTag
            checked={this.state.checked}
            onChange={(checked) => {
              this.setState({
                checked
              })
            }}
            className="aaa"
          >
            abc
          </CheckableTag>
          <Button
            size="large"
            type="primary"
          >
            随机练习
          </Button>
        </Drawer>

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
  Test
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);