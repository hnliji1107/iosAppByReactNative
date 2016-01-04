/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 签署协议页面
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView
  } = React;

var Header = require('../public/Header');

var Footer = require('../public/Footer');

var Agreement = require('../public/Agreement');


var SignAgreement = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} config={this.props.config}/>
        <ScrollView>
          <Agreement/>
        </ScrollView>
        <Footer navigator={this.props.navigator} config={this.props.config}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});


module.exports = SignAgreement;
