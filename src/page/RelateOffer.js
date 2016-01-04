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
  AsyncStorage
  } = React;

var Header = require('../public/Header');

var Footer = require('../public/Footer');


var RelateOffer = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
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
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator} config={this.props.config}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    );
  },
  updateDataSource: function (data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
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
  }
});


module.exports = RelateOffer;
