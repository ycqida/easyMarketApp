import React, {Component} from 'react'
// import {Toast} from 'antd-mobile'
import './index.scss'
import Header from '../../components/header'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as commonAction from '../../redux/actions/common';
import {withRouter} from "react-router-dom";
import delAddress from '../../static/img/del-address.png'
class Address extends Component{
  goBack () {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div id="addressPage">
        <Header clickLeft={this.goBack.bind(this)} title="地址管理"/>
        <div className="addressList">
          {
            [1, 2 ,3].map((item) => (
              <div className="addressItem" key={item}>
                {item===2?<div className="isChooseAddress"></div>:null}
                <div className="addressMsg">
                  <div className="concatName">
                    小明{item}
                  </div>
                  <div className="addressDetail">
                    <div className="concatPhone">15818264086</div>
                    <div className="concatAddress">广东省深圳市宝安区</div>
                    <div className="concatAddress">新安街道办常委村xx公寓906{item}</div>
                  </div>
                  <div className="deleteAddress">
                    <img src={delAddress} alt="delAddress"/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )

  }
}
export default withRouter(Address)
// const mapStateToProps = (state, props) => ({...state.common})
// const mapDispatchToProps = dispatch => ({actions: bindActionCreators(commonAction, dispatch)})
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mine))
