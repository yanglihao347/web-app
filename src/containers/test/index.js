/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, message } from 'antd';
// import md5 from 'blueimp-md5';
import { connect } from 'react-redux';

class Test extends Component {

    
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
        <button id="showBtn">显示/隐藏 公式</button>
        <div id="formula" style="display:none">公式</div>
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