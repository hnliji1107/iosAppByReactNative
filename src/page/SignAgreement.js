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
    navigator: React.PropTypes.object
  };

  static defaultProps = {
    navigator: {}
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="签署协议"/>

        <ScrollView>
          <Agreement/>
        </ScrollView>

        <Footer
          leftButtonText="取消"
          leftButtonCallback={this.footerLeftButtonCallback.bind(this)}
          rightButtonText="确认签署"
          rightButtonCallback={this.footerRightButtonCallback.bind(this)}
          />
      </View>
    );
  }

  headerLeftButtonCallback() {

  }

  footerLeftButtonCallback() {

  }

  footerRightButtonCallback() {
    this.props.navigator.push({name: 'InquirySheet'});
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});


export default SignAgreement;
