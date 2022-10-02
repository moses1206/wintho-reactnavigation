import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StackHome = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Move User"
        onPress={() =>
          navigation.navigate('TabUser', {
            userIdx: 100,
            userName: 'GilDong',
            userLastName: 'Hong',
          })
        }
      />
      <Button
        title="change the title"
        onPress={() =>
          navigation.setOptions({
            title: 'Changed!!',
            headerStyle: {backgroundColor: 'pink'},
            headerTintColor: 'red',
          })
        }
      />
    </View>
  );
};

export default StackHome;

const styles = StyleSheet.create({});
