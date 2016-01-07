/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 签署协议页面
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView
  } from 'react-native';

import Header from '../public/Header';

import Footer from '../public/Footer';

import Agreement from '../public/Agreement';


class SignAgreement extends Component {
  static propTypes = {
    navigator: React.PropTypes.object,
    config: React.PropTypes.object
  };

  static defaultProps = {
    navigator: {},
    config: {}
  };

  render() {
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
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});


export default SignAgreement;
