import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import My from '../pages/My';
import Home from '../pages/Home';
import Secord from '../pages/Secord';
import { Iconfont } from '../../font/index';
const handerName = {
  Home: '主页',
  My: '我的',
  Secord: '内页'
}
const iconName = {
  Home: 'icon-iconfonthome0',
  My: 'icon-wode'
}
const TabbarIcon = ({ routeName, tintColor,style,...resetProps }) => {
  return Object.keys(iconName).includes(routeName) ? <Iconfont name={iconName[routeName]} color={tintColor} style={{ fontSize: 20, ...style }} {...resetProps}/> : null
}

//首页底部菜单配置
const MainTabs = createBottomTabNavigator(
  {
    Home,
    My,
  },
  {
    //设置菜单图标
    defaultNavigationOptions: ({navigation}) => {
      const { routeName } = navigation.state;
      return {
        tabBarIcon: (props) => <TabbarIcon {...props} routeName={routeName}/>,
      };
    },
    tabBarOptions: {
      inactiveTintColor: 'rgba(0,0,0,0.45)',
      activeTintColor: '#722ed1',
    },
  },
);
const stack = createStackNavigator({
  main: {
    screen: MainTabs,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: Object.keys(handerName).includes(routeName) ? handerName[routeName] : routeName
      }
    }
    
  },
  Secord
})

 
export default stack;

