import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  useHeaderHeight,
} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import My from '../pages/My';
import Home from '../pages/Home';
// import Secord from '../pages/Secord';
import {Iconfont} from '../../font/index';
import HeaderBack from './HeaderBack';
const handerName = {
  Home: '主页',
  My: '我的',
  Secord: '内页',
};
const iconName = {
  Home: 'icon-iconfonthome0',
  My: 'icon-wodedangxuan',
};
const TabbarIcon = ({routeName, tintColor, style, ...resetProps}) => {
  return Object.keys(iconName).includes(routeName) ? (
    <Iconfont
      name={iconName[routeName]}
      color={tintColor || 'rgba(0,0,0,0.45)'}
      style={{fontSize: 20, ...style}}
      {...resetProps}
    />
  ) : null;
};

//首页底部菜单配置
const MainTabs = createBottomTabNavigator(
  {
    Home,
    // My,
  },
  {
    //设置菜单图标
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      return {
        tabBarIcon: (props) => <TabbarIcon {...props} routeName={routeName} />,
        title: handerName[routeName],
      };
    },
    tabBarOptions: {
      inactiveTintColor: 'rgba(0,0,0,0.45)',
      activeTintColor: '#722ed1',
    },
  },
);
const stack = createStackNavigator(
  {
    main: {
      screen: MainTabs,
      navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
          // headerTitle: Object.keys(handerName).includes(routeName)
          //   ? handerName[routeName]
          //   : routeName,
          headerTitle: null,
          headerTransparent: true,
          headerStatusBarHeight: 0,
        };
      },
    },
    // Secord: {
    //   screen: Secord,
    //   navigationOptions: ({navigation}) => {
    //     return {
    //       headerTransparent: true,
    //     };
    //   },
    // },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#722ed1',
      },
      headerBackImage: HeaderBack, //设置返回按钮
      headerTitleAlign: 'center', //header标题居中显示
      headerBackTitleVisible: false, //隐藏iOS返回按钮标题
      // headerPressColorAndroid: 'transparent',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      headerTintColor: '#fff', //设置headerTitle颜色
    },
  },
);

export default stack;
