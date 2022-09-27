import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const User = props => {
  const {params} = props.route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User</Text>
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Text>User idx: {JSON.stringify(userIdx)}</Text>
      <Text>User Name: {JSON.stringify(userName)}</Text>
      <Text>User LastName: {JSON.stringify(userLastName)}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
