/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 入口文件
 */

'use strict';

import React, {
  Component,
  AppRegistry,
  Text,
  View,
  Navigator
  } from 'react-native';

import SignAgreement from './src/page/SignAgreement';

import InquirySheet from './src/page/InquirySheet';

import QuoteFillin from './src/page/QuoteFillin';

import RelateOffer from './src/page/RelateOffer';

import QuoteSuccess from './src/page/QuoteSuccess';

import InquiryOffer from './src/page/InquiryOffer';

import QuotedOffer from './src/page/QuotedOffer';


class IosAppByReactNative extends Component {
  render = () => {
    //页面间切换效果：SceneConfigs = ['PushFromRight','FloatFromRight','FloatFromLeft','FloatFromBottom','FloatFromBottomAndroid','FadeAndroid','HorizontalSwipeJump','VerticalUpSwipeJump','VerticalDownSwipeJump'];
    return (
      <Navigator
        initialRoute={{name: 'SignAgreement'}}
        renderScene={renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        />
    );
  }
}

function renderScene(route, navigator) {
  var Component = SignAgreement;

  switch(route.name) {
    case 'SignAgreement':
      Component = SignAgreement;
      break;
    case 'InquirySheet':
      Component = InquirySheet;
      break;
    case 'QuoteFillin':
      Component = QuoteFillin;
      break;
    case 'RelateOffer':
      Component = RelateOffer;
      break;
    case 'QuoteSuccess':
      Component = QuoteSuccess;
      break;
    case 'InquiryOffer':
      Component = InquiryOffer;
      break;
    case 'QuotedOffer':
      Component = QuotedOffer;
      break;
    default:
      Component = SignAgreement;
      break;
  }

  return <Component navigator={navigator}/>
}


AppRegistry.registerComponent('iosAppByReactNative', () => IosAppByReactNative);
