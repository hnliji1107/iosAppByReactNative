/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.07
 * @Description 报价成功页面
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

import Header from '../public/Header';


class QuoteSuccess extends Component {
  static propTypes = {
    navigator: React.PropTypes.object
  }

  static defaultProps = {
    navigator: {}
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Header
          title="报价成功"
          leftButtonText="返回"
          leftButtonCallback={this.headerLeftButtonCallback}
          />

        <View style={styles.conentContainer}>
          <Image source={require('image!smile')} style={styles.weepSmile}/>

          <Text style={styles.successTip}>恭喜！您已经报价成功</Text>
          <Text style={styles.timeTip}>3秒钟自动跳转</Text>

          <TouchableHighlight
            underlayColor="orange"
            style={styles.jumpContainer}>

            <Text style={styles.jumpButton}>进入询价单列表</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  headerLeftButtonCallback = () => {
    this.props.navigator.pop();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  conentContainer: {
    alignItems: 'center'
  },
  successTip: {
    height: 30,
    lineHeight: 30,
    fontSize: 16,
    color: '#444'
  },
  timeTip: {
    marginTop: 15,
    marginBottom: 15,
    height: 30,
    lineHeight: 30,
    fontSize: 16,
    color: '#999'
  },
  weepSmile: {
    marginTop: 100,
    marginBottom: 20,
    width: 80,
    height: 80
  },
  jumpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f67300',
    borderRadius: 4,
    marginTop: 15,
    width: 160,
    height: 48
  },
  jumpButton: {
    color: '#fff',
    fontSize: 16
  }
});


export default QuoteSuccess;
