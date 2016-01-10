/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.10
 * @Description 已报价询价单页面
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
  } from 'react-native';

import Header from '../public/Header';


class QuotedOffer extends Component {
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
          title="已报价询价单"
          leftButtonText="列表"
          leftButtonCallback={this.headerLeftButtonCallback}
          style={styles.header}
          />

        <ScrollView>
          <View style={styles.information}>
            <View>
              <Image
                source={{uri: 'https://cbu01.alicdn.com/img/ibank/2015/663/364/2626463366_598074332.200x200.jpg'}}
                style={styles.avator}
                />
            </View>
            <View>
              <Text style={styles.buyName}>来自 HINX 的询价</Text>
              <Text style={styles.navigator}>女装 > 梭织类 > 羽绒服</Text>
            </View>
          </View>


          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>报价</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>¥20,000</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>关联产品</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>双面羊绒大衣高端修身</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>买家名称</Text>
            </View>

            <View style={styles.value}>
              <TouchableHighlight underlayColor="transparent">
                <View style={styles.value}>
                  <Image source={require('image!ww')} style={styles.ww}/>
                  <Text style={styles.valueText}>HINX商家</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>买家类型</Text>
            </View>

            <View style={styles.value}>
              <Image source={require('image!zuan')} style={styles.zuan}/>
              <Image source={require('image!zuan')} style={styles.zuan}/>
              <Image source={require('image!zuan')} style={styles.zuan}/>
              <Image source={require('image!zuan')} style={styles.zuan}/>
              <Image source={require('image!zuan')} style={styles.zuan}/>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>买家地区</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>杭州</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>年销售额</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>2000万</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>预计加工数量</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>200件</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>品质需求</Text>
            </View>

            <View style={styles.value}>
              <Text style={styles.valueText}>中档</Text>
            </View>
          </View>

          <View style={[styles.field, styles.remark]}>
            <View style={[styles.title, styles.remarkTitle]}>
              <Text style={[styles.titleText, styles.remarkTitleText]}>备注说明</Text>
            </View>

            <View style={[styles.value, styles.remarkValue]}>
              <Text style={[styles.valueText, styles.remarkValueText]}>备注信息备注信息您可在这里填写额外的要求，例如需要做刺绣</Text>
            </View>
          </View>
        </ScrollView>
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
  header: {
    alignItems: 'flex-start',
    paddingLeft: 55
  },
  information: {
    flexDirection: 'row',
    margin: 25
  },
  avator: {
    marginRight: 10,
    width: 100,
    height: 100
  },
  buyName: {
    color: '#444',
    fontSize: 18
  },
  navigator: {
    marginTop: 15,
    marginBottom: 15,
    color: '#898989',
    fontSize: 14
  },
  field: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#c7c7c7',
    paddingLeft: 25,
    paddingRight: 25,
    height: 44
  },
  title: {
    flex: 1,
    justifyContent: 'center'
  },
  value: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  zuan: {
    marginLeft: 5
  },
  ww: {
    marginRight: 8,
    height: 20,
    width: 20
    //resizeMode: Image.resizeMode.cover
  },
  titleText: {
    color: '#444',
    fontSize: 16
  },
  valueText: {
    color: '#898989',
    fontSize: 16
  },
  remark: {
    flexDirection: 'column',
    paddingBottom: 170
  },
  remarkTitle: {
    flex: 0,
    height: 44
  },
  remarkValue: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 150,
    overflow: 'hidden'
  },
  remarkValueText: {
    flex: 1,
    lineHeight: 20
  }
});


export default QuotedOffer;