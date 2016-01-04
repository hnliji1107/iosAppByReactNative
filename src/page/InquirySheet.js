/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 待报价询价单页面
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
  } = React;

var Header = require('../public/Header');

var Footer = require('../public/Footer');

var ImageSwiper = require('../public/ImageSwiper');


var InquirySheet = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} config={this.props.config}/>
        <ScrollView>
          <ImageSwiper/>

          <View style={styles.information}>
            <Text style={styles.buyName}>来自 HINX 的询价</Text>
            <Text style={styles.navigator}>女装 > 梭织类 > 羽绒服</Text>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>买家名称</Text>
            </View>
            <View style={styles.value}>
              <TouchableHighlight underlayColor="transparent">
                <View style={styles.value}>
                  <Image source={require('image!ww')} style={styles.ww}></Image>
                  <Text style={styles.valueText}>洛杉矶</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>买家类型</Text>
            </View>
            <View style={styles.value}>
              <Image source={require('image!zuan')} style={styles.zuan}></Image>
              <Image source={require('image!zuan')} style={styles.zuan}></Image>
              <Image source={require('image!zuan')} style={styles.zuan}></Image>
              <Image source={require('image!zuan')} style={styles.zuan}></Image>
              <Image source={require('image!zuan')} style={styles.zuan}></Image>
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
              <Text style={styles.titleText}>工厂地区要求</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>江浙沪</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>期望此日期前交货</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>2015年11月12日</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>加工类型</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>轻加工</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>加工方式</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>来图加工</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>报价截止日期</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>2015年11月29日</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.title}>
              <Text style={styles.titleText}>颜色/尺码</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>5色5码</Text>
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
        <Footer navigator={this.props.navigator} config={this.props.config}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  information: {
    marginLeft: 25,
    marginRight: 25
  },
  buyName: {
    color: '#444',
    fontSize: 18
  },
  navigator: {
    marginTop: 15,
    marginBottom: 15,
    color: '#898989',
    fontSize: 16
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


module.exports = InquirySheet;
