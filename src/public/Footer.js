/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 页面尾部
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
  } = React;


var Footer = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#f0f0f0"
          style={styles.cancelBtn}
          onPress={this.props.config.footerBtns[0].callback.bind(this, this.props)}>
          <View>
            <Text style={styles.cancelText}>
              {this.props.config.footerBtns[0].text}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="orange"
          style={styles.sureBtn}
          onPress={this.props.config.footerBtns[1].callback.bind(this, this.props)}>
          <View>
            <Text style={styles.sureText}>
              {this.props.config.footerBtns[1].text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#dadada',
    height: 52,
    width: Dimensions.get('window').width
  },
  cancelBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  cancelText: {
    color: '#8e8e8e',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sureBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f67300'
  },
  sureText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});


module.exports = Footer;