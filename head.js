/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//从react模块导入默认组件React和Component
import {
  AppRegistry,//注册app入口使用
  StyleSheet,//创建样式表使用
  Text,//写文本的,类似于HTML里的p
  View, //模块视图,类似于HTML里的div
  TextInput,
  ImageBackground,
  Image
} from 'react-native';

class Head extends Component {
  //es6语法,设置初始值,必须使用constructor方法
  constructor(){
    super();
    this.state={
      str:'hello'
    }
  }

  render() {
    return (
      <View style={styles.wrap}>   

        <View style={styles.box}>
            <View style={[styles.con,styles.rigline]}><Text style={styles.txt}>酒店</Text><Image style={styles.logoTu} source={require('./img/11.jpg')} /></View>
                  
            <View style={[styles.con,styles.rigline]}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>海外酒店</Text></View>
              <View style={styles.con}><Text style={styles.txt}>特价酒店</Text></View>
            </View>
          
             <View style={styles.con}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>团购</Text></View>
              <View style={styles.con}><Text style={styles.txt}>民宿·客栈</Text></View>
            </View>   
        </View>

        <View style={styles.box2}>
            <View style={[styles.con,styles.rigline]}><Text style={styles.txt}>机票</Text><Image style={styles.logoTu} source={require('./img/12.png')} /></View>
                  
            <View style={[styles.con,styles.rigline]}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>火车票·抢票</Text></View>
              <View style={styles.con}><Text style={styles.txt}>特价机票</Text></View>
            </View>
          
             <View style={styles.con}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>汽车票·船票</Text></View>
              <View style={styles.con}><Text style={styles.txt}>专车·租车</Text></View>
            </View>   
        </View>

        <View style={styles.box3}>
            <View style={[styles.con,styles.rigline]}><Text style={styles.txt}>旅游</Text><Image style={styles.logoTu} source={require('./img/13.png')} /></View>
                  
            <View style={[styles.con,styles.rigline]}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>目的地攻略</Text></View>
              <View style={styles.con}><Text style={styles.txt}>周边游</Text></View>
            </View>
          
             <View style={styles.con}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>游轮旅行</Text></View>
              <View style={styles.con}><Text style={styles.txt}>定制旅行</Text></View>
            </View>   
        </View>

        <View style={styles.box4}>
            <View style={[styles.con,styles.rigline]}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>景点·玩乐</Text></View>
              <View style={styles.con}><Text style={styles.txt}>礼品卡</Text></View>
            </View>
                  
            <View style={[styles.con,styles.rigline]}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>美食林</Text></View>
              <View style={styles.con}><Text style={styles.txt}>WiFi·电话卡</Text></View>
            </View>
          
             <View style={styles.con}>
              <View style={[styles.botline,styles.con]}><Text style={styles.txt}>购物·信用卡</Text></View>
              <View style={styles.con}><Text style={styles.txt}>保险·签证</Text></View>
            </View>   
        </View>

        <View style={styles.box5}>
            <View style={[styles.con,styles.rigline5]}>
              <View style={[styles.botline5,styles.con]}>
                <Image style={styles.logo} source={require('./img/a.png')} />
                <Text style={styles.txt5}>自由行</Text>        
              </View>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/hotel.png')} /><Text style={styles.txt5}>酒店+景点</Text></View>
              <View style={styles.con}><Image style={styles.logo} 
                source={{uri:'https://images3.c-ctrip.com/pinplay/active/logo/DaP.png'}} /><Text style={styles.txt5}>机场停车</Text></View>
            </View>
                  
            <View style={[styles.con,styles.rigline5]}>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/weilingdui.png')} /><Text style={styles.txt5}>微领队</Text></View>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/haiwai.png')} /><Text style={styles.txt5}>海外玩乐</Text></View>
              <View style={styles.con}><Image style={styles.logo} 
                source={{uri:'https://images3.c-ctrip.com/pinplay/active/logo/XingLiJiSong.PNG'}} /><Text style={styles.txt5}>行李寄送</Text></View>
            </View>
          
             <View style={[styles.con,styles.rigline5]}>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/oneday.png')} /><Text style={styles.txt5}>一日游</Text></View>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/waibi.png')} /><Text style={styles.txt5}>外币兑换</Text></View>
              <View style={styles.con}><Image style={styles.logo} 
                source={{uri:'https://images3.c-ctrip.com/pinplay/active/logo/play56.png'}} /><Text style={styles.txt5}>当季去哪</Text></View>
            </View>

            <View style={styles.con}>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/high.png')} /><Text style={styles.txt5}>高端游</Text></View>
              <View style={[styles.botline5,styles.con]}><Image style={styles.logo} source={require('./img/hezuo.png')} /><Text style={styles.txt5}>加盟合作</Text></View>
              <View style={styles.con}><Image style={styles.logo} 
                source={{uri:'https://images3.c-ctrip.com/pinplay/active/logo/play56.png'}} /><Text style={styles.txt5}>更多服务</Text></View>
            </View>      
        </View>

        <View style={styles.box6}>
            <View style={styles.col}>
             <Image style={styles.logo6} source={{uri:'https://dimg04.c-ctrip.com/images/300b0k000000civ25B91D_C_360_202.jpg'}} />
              <Text style={styles.txt}>特卖会</Text>
              
            </View>
                  
            <View style={styles.col}>
              <View style={styles.botline}>
                <Image style={styles.logo6} source={{uri:'https://dimg04.c-ctrip.com/images/300b0k000000civ25B91D_C_360_202.jpg'}} />
                <Text style={styles.txt}>美食林</Text>
              </View>
            </View>
          
        </View>



      </View>   

    );
  }
}

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:'#f2f2f2',
  },
  box:{
    flexDirection:'row',
    backgroundColor:'#ff697a',
    marginTop:30,
    marginRight:15,
    marginLeft:5,
    height:80,
    borderRadius:5    
  },
  con:{
    flex:1,
    justifyContent:'center'
  },
  rigline:{
    borderRightWidth:1,
    borderRightColor:'white'
  },
  botline:{
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  txt:{
    textAlign:'center',
    color:'white',
    fontSize: 12
  },
  logoTu:{
    width:30,
    height:30,
    marginLeft:50,
    marginTop:8
  },

  box2:{
    flexDirection:'row',
    backgroundColor:'#3d98ff',
    marginTop:4,
    marginRight:15,
    marginLeft:5,
    height:80,
    borderRadius:5    
  },
  box3:{
    flexDirection:'row',
    backgroundColor:'#44c522',
    marginTop:4,
    marginRight:15,
    marginLeft:5,
    height:80,
    borderRadius:5    
  },
  box4:{
    flexDirection:'row',
    backgroundColor:'#fc9720',
    marginTop:4,
    marginRight:15,
    marginLeft:5,
    height:80,
    borderRadius:5
  },
  box5:{
    flexDirection:'row',
    backgroundColor:'#fff',
    marginTop:4,
    marginRight:15,
    marginLeft:5,
    height:180,
    borderRadius:5
  },
  rigline5:{
    borderRightWidth:1,
    borderRightColor:'#f2f2f2'
  },
  botline5:{
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2'
  },
  txt5:{
    textAlign:'center',
    color:'#000',
    fontSize: 10,
    marginTop:4
  },
  logo:{
    width:20,
    height:20,
    marginLeft:40
  },
  box6:{
    flexDirection:'column',
    backgroundColor:'#fff',
    marginTop:4,
    marginRight:15,
    marginLeft:5,
    height:260,
  },
  col:{
    flex:1,
    justifyContent:'center'
  },
  logo6:{
    width:180,
    height:100,
    marginLeft:40
  }
});

//AppRegistry.registerComponent('myapp', () => myapp);
//把Head组件抛出到环境里,方便其他组件使用
module.exports =Head;