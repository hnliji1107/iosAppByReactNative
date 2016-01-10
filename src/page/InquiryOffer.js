/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.10
 * @Description 询价（待处理和已报价）列表页面
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SegmentedControlIOS,
  ScrollView,
  ListView
  } from 'react-native';

import Header from '../public/Header';

import host from '../lib/hostConfigs';


class InquiryOffer extends Component {
  static propTypes = {
    navigator: React.PropTypes.object
  }

  static defaultProps = {
    navigator: {}
  }

  state = {
    unRespondDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    unQuotedDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    quotedDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    tabSelectedIndex: 0
  }

  componentWillMount = () => {
    fetch("http://" + host + ":8081/src/data/unRespondOffer.json")
      .then(res => res.json())
      .then(res => this.updateDataSource('unRespond', res))
      .catch((error) => {
        console.warn(error);
      });

    fetch("http://" + host + ":8081/src/data/unQuotedOffer.json")
      .then(res => res.json())
      .then(res => this.updateDataSource('unQuoted', res))
      .catch((error) => {
        console.warn(error);
      });
  }

  render = () => {
    var inquiryList = (
      <View>
        <View style={styles.companyContainer}>
          <Text style={styles.companyName}>上海欣欣美惠服装有限公司</Text>
          <Text style={styles.companyScore}>积分：888</Text>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>待响应询价单</Text>
          </View>
          <ListView
            dataSource={this.state.unRespondDataSource}
            renderRow={this.renderRow}
            />
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>待报价询价单</Text>
          </View>
          <ListView
            dataSource={this.state.unQuotedDataSource}
            renderRow={this.renderRow}
            />
        </View>
      </View>
    );

    if (this.state.tabSelectedIndex === 1) {
      inquiryList = (
        <ListView
          dataSource={this.state.quotedDataSource}
          renderRow={this.quotedRenderRow}
          />
      );
    }

    return (
      <View style={styles.container}>
        <Header
          title="淘工厂"
          leftButtonText="重新报价"
          leftButtonCallback={this.headerLeftButtonCallback}
          style={styles.header}
          />

        <View style={styles.tabContainer}>
          <SegmentedControlIOS
            values={['待处理', '已报价']}
            selectedIndex={0}
            tintColor="#5989d4"
            style={styles.tabBar}
            onChange={this.tabSwitch}
            />
        </View>

        <ScrollView style={styles.conentContainer}>
          {inquiryList}
        </ScrollView>
      </View>
    );
  }

  tabSwitch = (event) => {
    var selectedIndex = event.nativeEvent.selectedSegmentIndex;

    this.setState({tabSelectedIndex: selectedIndex});

    //只有缓存中没有对应数据时才发请求获取数据
    if (selectedIndex === 1 && this.state.quotedDataSource._dirtyRows.length <= 0) {
      fetch("http://" + host + ":8081/src/data/quotedOffer.json")
        .then(res => res.json())
        .then(res => this.updateDataSource('quoted', res))
        .catch((error) => {
          console.warn(error);
        });
    }
  }

  updateDataSource = (type, data) => {
    this.setState({
      [`${type}DataSource`]: this.state[`${type}DataSource`].cloneWithRows(data)
    });
  }

  renderRow = (rowData) => {
    return (
      <TouchableHighlight onPress={this.jumpToDetail.bind(this, 'InquirySheet')}>
        <View style={styles.rowContainer}>
          <View style={styles.avatorContainer}>
            <Image source={{uri: rowData.img}} style={styles.avator}/>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.title}>{rowData.title}</Text>
            <Text style={styles.time}>预计交货日期：{rowData.deliveryTime}</Text>
            <Text style={styles.type}>{rowData.productNumber}件 {rowData.productType}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Image source={require('image!right-dir')} style={styles.icon}></Image>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  quotedRenderRow = (rowData) => {
    return (
      <TouchableHighlight onPress={this.jumpToDetail.bind(this, 'QuotedOffer')}>
        <View style={styles.rowContainer}>
          <View style={styles.avatorContainer}>
            <Image source={{uri: rowData.img}} style={styles.avator}/>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.title, styles.quotedTitle]}>{rowData.title}</Text>
            <Text style={styles.price}>已报价：¥{rowData.price}</Text>
            <Text style={styles.time}>交货日期：{rowData.deliveryTime}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  headerLeftButtonCallback = () => {
    this.props.navigator.popToTop();
  }

  jumpToDetail = (name) => {
    this.props.navigator.push({name: name});
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'flex-start',
    paddingLeft: 45
  },
  tabContainer: {
    flexDirection: 'row'
  },
  tabBar: {
    flex: 1,
    marginTop: 18,
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80,
    height: 35
  },
  companyContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    height: 30,
    overflow: 'hidden'
  },
  companyName: {
    flex: 1,
    lineHeight: 25
  },
  companyScore: {
    flex: 1,
    lineHeight: 25,
    color: '#f67300',
    textAlign: 'right'
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
    flex: 1,
    paddingRight: 35,
    height: 20,
    lineHeight: 20,
    overflow: 'hidden',
    color: '#444',
    fontSize: 16
  },
  quotedTitle: {
    paddingRight: 0
  },
  time: {
    height: 25,
    lineHeight: 25,
    overflow: 'hidden',
    color: '#999',
    fontSize: 14
  },
  price: {
    height: 25,
    lineHeight: 25,
    overflow: 'hidden',
    color: '#999',
    fontSize: 14
  },
  type: {
    height: 25,
    lineHeight: 25,
    overflow: 'hidden',
    color: '#999',
    fontSize: 14
  },
  listTitleContainer: {
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#c7c7c7',
    paddingLeft: 27,
    height: 48
  },
  listTitle: {
    fontSize: 16
  },
  iconContainer: {
    position: 'absolute',
    top: 45,
    right: 20
  },
  icon: {
    width: 12,
    height: 20
  }
});


export default InquiryOffer;
