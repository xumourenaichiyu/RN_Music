import React from 'react';
import {Text,View} from 'react-native'
const My = (props) => {
  const { navigation } = props;
  const press = () => {
    navigation.push('Secord')
  }
  return <View>
    <Text onPress={press}>my</Text>
  </View>
}
export default My;