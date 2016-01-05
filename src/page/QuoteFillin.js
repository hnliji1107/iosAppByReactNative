/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 填写报价页面
 */


'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
  Switch,
  AsyncStorage
  } = React;

var Header = require('../public/Header');

var Footer = require('../public/Footer');


var QuoteFillin = React.createClass({
  getInitialState: function () {
    return {
      offerPrice: '',
      offerRemark: '',
      offerTitle: '',
      offerCoupon: false
    };
  },
  componentWillMount: function () {
    AsyncStorage.getItem('relateOffer')
      .then(res => {
        this.setState({
          offerTitle: (JSON.parse(res) || {}).title
        });
      })
      .catch((error) => console.warn(error));

    AsyncStorage.getItem('offerPrice')
      .then(res => this.setState({offerPrice: res}))
      .catch((error) => console.warn(error));

    AsyncStorage.getItem('offerRemark')
      .then(res => this.setState({offerRemark: res}))
      .catch((error) => console.warn(error));

    AsyncStorage.getItem('offerCoupon')
      .then(res => this.setState({offerCoupon: JSON.parse(res) || false}))
      .catch((error) => console.warn(error));
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} config={this.props.config}/>
        <ScrollView>
          <View style={styles.viewContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="请输入价格"
              placeholderTextColor="#999"
              onEndEditing={this.saveOfferPrice}
              value={this.state.offerPrice}/>
            <View style={styles.required}>
              <Text style={styles.star}>*</Text>
              <Text style={styles.rmb}>¥</Text>
            </View>
          </View>

          <View style={[styles.viewContainer, styles.multilineContainer]}>
            <TextInput
              style={[styles.input, styles.multiline]}
              multiline={true}
              placeholder="请输入备注"
              placeholderTextColor="#999"
              onEndEditing={this.saveOfferRemark}
              value={this.state.offerRemark}/>
          </View>

          <View style={[styles.viewContainer, styles.selectContainer]}>
            <TouchableHighlight onPress={() => this.props.navigator.push({name: 'RelateOffer'})}>
              <View>
                <TextInput
                  style={[styles.input, styles.select]}
                  editable={false}
                  placeholder="请选择关联产品"
                  placeholderTextColor="#999"
                  value={this.state.offerTitle}/>
                <View style={styles.required}>
                  <Text style={styles.star}>*</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image source={require('image!right-dir')} style={styles.icon}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={[styles.viewContainer, styles.switchContainer]}>
            <Switch
              style={styles.switch}
              onValueChange={this.saveCoupon}
              value={this.state.offerCoupon}
              />
            <Text style={styles.tip}>发放1元打样优惠券（提高被买家选中的概率）</Text>
          </View>

        </ScrollView>
        <Footer navigator={this.props.navigator} config={this.props.config}/>
      </View>
    );
  },
  saveOfferPrice: function (event) {
    AsyncStorage.setItem('offerPrice', event.nativeEvent.text);
  },
  saveOfferRemark: function (event) {
    AsyncStorage.setItem('offerRemark', event.nativeEvent.text);
  },
  saveCoupon: function (value) {
    this.setState({offerCoupon: value});

    AsyncStorage.setItem('offerCoupon', JSON.stringify(value));
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  viewContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 75
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    paddingLeft: 45,
    height: 40,
    fontSize: 16
  },
  multilineContainer: {
    marginTop: 24
  },
  multiline: {
    paddingLeft: 8,
    height: 92
  },
  required: {
    flexDirection: 'row',
    position: 'absolute',
    top: 1,
    left: 8,
    backgroundColor: '#fff'
  },
  star: {
    marginTop: 10,
    marginRight: 2,
    color: '#ff7300',
    fontSize: 23
  },
  rmb: {
    color: '#444',
    fontSize: 30
  },
  selectContainer: {
    marginTop: 24
  },
  select: {
    paddingLeft: 25,
    paddingRight: 30
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: '#fff'
  },
  icon: {
    width: 12,
    height: 20
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 24
  },
  tip: {
    flex: 1,
    marginLeft: 10,
    lineHeight: 20,
    fontSize: 16,
    color: '#5989d4'
  }
});


module.exports = QuoteFillin;
