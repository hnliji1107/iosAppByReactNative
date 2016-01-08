/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 关联产品页面
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableHighlight,
  Image,
  AsyncStorage,
  ActivityIndicatorIOS
  } from 'react-native';

import Header from '../public/Header';

import host from '../lib/hostConfigs';


class RelateOffer extends Component {
  constructor = (props) => {
    this.super(props);
  }

  static propTypes = {
    navigator: React.PropTypes.object
  }

  static defaultProps = {
    navigator: {}
  }

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    cacheOffers: []
  }

  componentWillMount = () => {
    fetch("http://" + host + ":8081/src/data/relateOffer.json")
      .then(res => res.json())
      .then(res => this.updateDataSource(res))
      .catch((error) => {
        console.warn(error);
      });
  }

  render = () => {
    let resultJSX = (
      <ActivityIndicatorIOS size="large" style={styles.loading}/>
    );

    let searBarJSX = (
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
    );


    //这一步判断的作用是防止过早的显示无结果提示，
    //只有等到异步结果到了之后才判断显示什么结果，
    //在此之前只显示loading图标
    if (this.state.currentOffes) {

      if (this.state.currentOffes.length > 0) {

        resultJSX = (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            />
        );

      } else {

        if (this.state.isSearch) {

          resultJSX = (
            <View style={styles.emptyResult}>
              <Image source={require('image!weep')} style={styles.weepSmile}/>
              <Text style={styles.emptyTip}>抱歉，搜索无结果</Text>
            </View>
          );

        } else {

          searBarJSX = undefined;

          resultJSX = (
            <View style={styles.emptyResult}>
              <Image source={require('image!weep')} style={styles.weepSmile}/>

              <Text style={styles.emptyTip}>您还未有相关加工产品，</Text>
              <Text style={styles.emptyTip}>请电脑登录1688发布供应产品...</Text>
            </View>
          );

        }

      }

    }

    return (
      <View style={styles.container}>
        <Header
          title="关联产品"
          leftButtonText="返回"
          leftButtonCallback={this.headerLeftButtonCallback}
          />

        {searBarJSX}
        {resultJSX}
      </View>
    );
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      cacheOffers: data,
      currentOffes: data
    });
  }

  renderRow = (rowData) => {
    return (
      <TouchableHighlight onPress={() => this.selectRow(rowData)}>
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
  }

  selectRow = (rowData) => {
    AsyncStorage.setItem('relateOffer', JSON.stringify(rowData), () => {
        this.props.navigator.immediatelyResetRouteStack([
          {name: 'SignAgreement'},
          {name: 'InquirySheet'},
          {name: 'QuoteFillin'}
        ]);
      }
    );
  }

  searchOffer = (event) => {
    const reg = new RegExp(event.nativeEvent.text, 'ig');
    let searchResult = [];

    this.state.cacheOffers.forEach(offer => {
      if (reg.test(offer.title)) {
        searchResult.push(offer);
      }
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(searchResult),
      currentOffes: searchResult,
      isSearch: true
    });
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
    justifyContent: 'center'
  },
  emptyTip: {
    height: 30,
    lineHeight: 30,
    fontSize: 16,
    color: '#444'
  },
  weepSmile: {
    marginTop: 100,
    marginBottom: 20,
    width: 80,
    height: 80
  }
});


export default RelateOffer;
