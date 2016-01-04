/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 页面头部
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
  } = React;


var Header = React.createClass({
  render: function () {
    var headJumpContent, headerBtns = this.props.config.headerBtns || [];

    if (headerBtns.length > 0) {
      headJumpContent = (
        <TouchableHighlight
          underlayColor="#5989B2"
          style={styles.touchableContainer}
          onPress={headerBtns[0].callback.bind(this, this.props)}>
          <View style={styles.jumpContainer}>
            <Image source={require('image!left-dir')} style={styles.jumpIcon}/>
            <Text style={styles.text}>{headerBtns[0].text}</Text>
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <View style={styles.container}>
        {headJumpContent}
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.config.title}</Text>
        </View>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#5989d4',
    marginTop: 30,
    height: 44
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  touchableContainer: {
    paddingRight: 10,
    justifyContent: 'center'
  },
  jumpContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  jumpIcon: {
    marginLeft: 10,
    marginRight: 10,
    width: 12,
    height: 22
  }
});


module.exports = Header;