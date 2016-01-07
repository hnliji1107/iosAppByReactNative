/*
 * @Author      shijun.lisj
 * @Email       shijun.lisj@alibaba-inc.com
 * @Date        2016.01.02
 * @Description 协议内容
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
  } from 'react-native';


class Agreement extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>阿里巴巴友情提示：在报名入驻淘工厂-快捷淘厂频道之前请仔细阅读本承诺函，确保在报名之前，您已完全理解和接受承诺函下所有内容。您一旦成功提交报名申请，即视为承诺生效；若您不同意承诺函所述的某一项内容或对本承诺函存在异议，请勿提交报名申请。</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>产品款式图样保密承诺函</Text>
        </View>

        <View>
          <Text style={styles.text}>为落实买家（需求方）与卖家（供应方）之间的生产合作事项，本企业特此函就加强买家的商业秘密、知识产权等保密信息的保护等事宜作出如下保证和承诺：</Text>
        </View>

        <View style={[styles.titleContainer, styles.lfTitleContainer]}>
          <Text style={styles.title}>一、产品图样的产权及归属</Text>
        </View>

        <View>
          <Text style={styles.text}>1、本企业承诺，本企业在与买家就双方通过阿里巴巴中国站淘工厂-快捷淘厂频道进行交易洽谈（包括但不限于设计打样阶段等）及后续双方实际达成交易（如有）过程中，本企业接受买家委托与买家共同创作形成的相应产品款式设计图样（简称：图样，下同），本企业确认对应知识产权归买家所有（双方另有约定的除外）。</Text>
        </View>

        <View style={styles.space}>
          <Text
            style={styles.text}>2、本企业知晓，买家自行提供的相应图样（包括并不局限于以下情形），对应知识产权属买家或授权买家使用的权利方所有，本企业将严格遵守本函第二条约定对此等信息进行保密：</Text>
          <Text style={styles.text}>（1）设计图稿：买家所有相关设计图稿、包括末进行实样制作或生产的产品图样；</Text>
          <Text style={styles.text}>（2）款式图样：开发样品款式/工艺图样、包括生产相关样品图样；</Text>
          <Text style={styles.text}>（3）其它买家因交易洽谈需要披露给本企业的图样。</Text>
        </View>

        <View style={[styles.titleContainer, styles.lfTitleContainer]}>
          <Text style={styles.title}>二、保密承诺</Text>
        </View>

        <View>
          <Text style={styles.text}>本企业保证并承诺，自本企业首次接触前述买家图样等保密信息之时起，谨慎、妥善持有，并严格保密，未经得买家事先书面同意，不会直接或间接向任何第三方披露、泄露、传递，不复制、转让、遗失，不利用买家的保密信息资料进行与双方合作无关的经营活动，直至此等保密信息已通过其他合法渠道公开无需保密为止。如因本企业违反前述承诺而造成买家损失的，由本企业承担全部责任。</Text>
        </View>

        <View style={[styles.titleContainer, styles.lfTitleContainer]}>
          <Text style={styles.title}>三、纠纷处理</Text>
        </View>

        <View>
          <Text style={styles.text}>本企业承诺遵守相应法律法规及阿里巴巴中国站规则，积极为买家提供相应服务，如与买家产生相应交易纠纷，本企业将积极配合解决，并接受阿里巴巴根据网站规则及其他适用规则进行的处理。</Text>
        </View>

        <View style={styles.space}>
          <Text style={styles.text}>本企业保证于《承诺函》中所提供的全部信息真实有效，并将严格遵守前述保证和承诺，如有违反，阿里巴巴有权将本企业清退出淘工厂，并有权依据阿里巴巴中国网站规则等对本企业进行相应处罚，如对阿里巴巴造成损害，则将足额赔偿阿里巴巴因此受到的损失（包括但不限于合理律师费等）。</Text>
        </View>

        <View style={[styles.titleContainer, styles.endContainer]}>
          <Text style={styles.title}>本企业同意以上协议</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  text: {
    lineHeight: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  lfTitleContainer: {
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  space: {
    marginTop: 10
  },
  endContainer: {
    marginBottom: 30
  }
});


export default Agreement;