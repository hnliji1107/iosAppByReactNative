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

import _ from './src/lib/underscore';

import navigatorConfigs from './src/lib/navigatorConfigs';


class IosAppByReactNative extends Component {
  render() {
    //页面间切换效果：SceneConfigs = ['PushFromRight','FloatFromRight','FloatFromLeft','FloatFromBottom','FloatFromBottomAndroid','FadeAndroid','HorizontalSwipeJump','VerticalUpSwipeJump','VerticalDownSwipeJump'];
    return (
      <Navigator
        initialRoute={{name: navigatorConfigs['SignAgreement'].name}}
        renderScene={renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        />
    );
  }
}

function renderScene(route, navigator) {
  const config = navigatorConfigs[route.name];

  return <config.component navigator={navigator} config={config}/>
}


AppRegistry.registerComponent('iosAppByReactNative', () => IosAppByReactNative);
