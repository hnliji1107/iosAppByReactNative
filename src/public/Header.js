/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 页面头部
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
  } from 'react-native';


class Header extends Component {
  render = () => {
    let leftButtonJSX;

    if (this.props.leftButtonText) {
      leftButtonJSX = (
        <TouchableHighlight
          underlayColor="#5989B2"
          style={styles.touchableContainer}
          onPress={this.props.leftButtonCallback}>

          <View style={styles.leftButtonContainer}>
            <Image source={require('image!left-dir')} style={styles.leftButtonIcon}/>
            <Text style={styles.text}>{this.props.leftButtonText}</Text>
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <View style={styles.container}>
        {leftButtonJSX}

        <View style={[styles.title, this.props.style]}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
  leftButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftButtonIcon: {
    marginLeft: 10,
    marginRight: 10,
    width: 12,
    height: 22
  }
});


export default Header;