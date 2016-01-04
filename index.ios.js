/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 入口文件
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Text,
  View,
  Navigator
  } = React;

var _ = require('./src/lib/underscore');

var configs = require('./src/lib/configs');

var navigatorConfigs = configs.navigatorConfigs;


var iosAppByReactNative = React.createClass({
  render: function () {
    //页面间切换效果：
    //SceneConfigs = [
    //  'PushFromRight',
    //  'FloatFromRight',
    //  'FloatFromLeft',
    //  'FloatFromBottom',
    //  'FloatFromBottomAndroid',
    //  'FadeAndroid',
    //  'HorizontalSwipeJump',
    //  'VerticalUpSwipeJump',
    //  'VerticalDownSwipeJump'
    //];

    return (
      <Navigator
        initialRoute={{name: navigatorConfigs['SignAgreement'].name}}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        />
    );
  },
  renderScene: function (route, navigator) {
    var config = _.extend(navigatorConfigs[route.name], {host: configs.host});

    return <config.component navigator={navigator} config={config}/>
  }
});


AppRegistry.registerComponent('iosAppByReactNative', () => iosAppByReactNative);
