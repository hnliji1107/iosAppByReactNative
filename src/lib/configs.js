/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 配置文件
 */

'use strict';

var React = require('react-native');

var {
  AlertIOS
  } = React;


var navigatorConfigs = {
  SignAgreement: {
    component: require('../page/SignAgreement'),
    name: 'SignAgreement',
    title: '签署协议',
    footerBtns: [{
      text: '取消',
      callback: (props) => ''
    }, {
      text: '确认签署',
      callback: (props) => props.navigator.push({name: 'InquirySheet'})
    }]
  },

  InquirySheet: {
    component: require('../page/InquirySheet'),
    name: 'InquirySheet',
    title: '待报价询价单',
    headerBtns: [{
      text: '列表',
      callback: (props) => ''
    }],
    footerBtns: [{
      text: '放弃报价',
      callback: (props) => {
        AlertIOS.alert('放弃后将失去本次报价机会', null, [{
          text: '取消'
        }, {
          text: '确认',
          onPress: () => props.navigator.pop()
        }], 'default');
      }
    }, {
      text: '立即报价',
      callback: (props) => props.navigator.push({name: 'QuoteFillin'})
    }]
  },

  QuoteFillin: {
    component: require('../page/QuoteFillin'),
    name: 'QuoteFillin',
    title: '报价信息',
    footerBtns: [{
      text: '取消',
      callback: (props) => props.navigator.pop()
    }, {
      text: '发送',
      callback: (props) => ''
    }]
  },

  RelateOffer: {
    component: require('../page/RelateOffer'),
    name: 'RelateOffer',
    title: '关联产品',
    headerBtns: [{
      text: '返回',
      callback: (props) => props.navigator.pop()
    }]
  }
};


module.exports = {
  host: '10.17.215.110',
  navigatorConfigs: navigatorConfigs
};

