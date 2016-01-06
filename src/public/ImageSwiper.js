/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 图片轮播
 */

'use strict';

import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';

// https://github.com/leecade/react-native-swiper?utm_source=tuicool&utm_medium=referral
import Swiper from 'react-native-swiper';


class ImageSwiper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper width={250} height={300}>
          <View>
            <Image
              source={{uri: 'http://i02.c.aliimg.com/img/ibank/2014/741/695/1280596147_1773369917.250x250.jpg'}}
              style={styles.image}/>
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'http://i02.c.aliimg.com/img/ibank/2013/759/404/1105404957_796840122.250x250.jpg'}}
              style={styles.image}/>
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'http://i05.c.aliimg.com/img/ibank/2014/155/614/1280416551_459698115.250x250.jpg'}}
              style={styles.image}/>
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'http://cbu01.alicdn.com/img/ibank/2015/663/364/2626463366_598074332.250x250.jpg'}}
              style={styles.image}/>
          </View>
        </Swiper>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
});


export default ImageSwiper;
