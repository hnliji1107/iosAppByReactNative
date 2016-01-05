/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 关联产品页面
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableHighlight,
  Image,
  AsyncStorage,
  ActivityIndicatorIOS
  } = React;

var Header = require('../public/Header');

var Footer = require('../public/Footer');

var _ = require('../lib/underscore');


var RelateOffer = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      cacheOffers: [],
      currentOffes: []
    };
  },
  componentWillMount: function () {
    fetch("http://" + this.props.config.host + ":8081/src/data/relateOffer.json")
      .then(res => res.json())
      .then(res => this.updateDataSource(res))
      .catch((error) => {
        console.warn(error);
      });
  },
  render: function () {
    var resultJSX = (
      <ActivityIndicatorIOS
        size="large"
        style={styles.loading}
        />
    );

    if (this.state.currentOffes.length > 0) {
      resultJSX = (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      );
    } else {
      resultJSX = (
        <View style={styles.emptyResult}>
          <Text>抱歉，搜索无结果</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} config={this.props.config}/>
        <View style={styles.searchContainer}>
          <Image source={require('image!search')} style={styles.searchIcon}/>
          <TextInput
            placeholder="请输入产品名称搜索"
            placeholderTextColor="#999"
            returnKeyType="search"
            onSubmitEditing={this.searchOffer}
            style={styles.searchInput}
            />
        </View>
        {resultJSX}
      </View>
    );
  },
  updateDataSource: function (data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      cacheOffers: data,
      currentOffes: data
    });
  },
  renderRow: function (rowData) {
    return (
      <TouchableHighlight onPress={this.selectRow.bind(this, rowData)}>
        <View style={styles.rowContainer}>
          <View style={styles.avatorContainer}>
            <Image source={{uri: rowData.img}} style={styles.avator}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{rowData.title}</Text>
            <Text style={styles.price}>价格：¥{rowData.price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  selectRow: function (rowData) {
    AsyncStorage.setItem('relateOffer', JSON.stringify(rowData), () => {
        this.props.navigator.immediatelyResetRouteStack([
          {name: 'SignAgreement'},
          {name: 'InquirySheet'},
          {name: 'QuoteFillin'}
        ]);
      }
    );
  },
  searchOffer: function (event) {
    var reg = new RegExp(event.nativeEvent.text, 'ig'),
      searchResult = [];

    _.each(this.state.cacheOffers, function (offer) {
      if (reg.test(offer.title)) {
        searchResult.push(offer);
      }
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(searchResult),
      currentOffes: searchResult
    });
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#c7c7c7',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 20,
    paddingBottom: 20
  },
  avatorContainer: {
    marginRight: 10
  },
  avator: {
    width: 75,
    height: 75
  },
  infoContainer: {
    flex: 1
  },
  title: {
    marginTop: 10,
    height: 20,
    lineHeight: 20,
    overflow: 'hidden',
    color: '#444',
    fontSize: 16
  },
  price: {
    marginTop: 10,
    height: 20,
    lineHeight: 20,
    overflow: 'hidden',
    color: '#999',
    fontSize: 16
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 13,
    marginLeft: 30,
    marginRight: 30
  },
  searchIcon: {
    marginTop: 7,
    marginLeft: 10,
    marginRight: 10,
    width: 16,
    height: 16
  },
  searchInput: {
    flex: 1,
    height: 30,
    fontSize: 14
  },
  loading: {
    marginTop: 100
  },
  emptyResult: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  }
});


module.exports = RelateOffer;
