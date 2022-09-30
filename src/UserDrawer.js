import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const UserDrawer = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default UserDrawer;

const styles = StyleSheet.create({});
