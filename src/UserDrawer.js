import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useEffect} from 'react';
import LogoImage from './assets/pics/home_icon.png';

const UserDrawer = props => {
  const drawerStyle = () => {
    props.navigation.setOptions({
      drawerIcon: () => (
        <Image style={{width: 40, height: 40}} source={LogoImage} />
      ),
    });
  };

  useEffect(() => {
    drawerStyle();
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User</Text>
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('HomeDrawer')}
      />
    </View>
  );
};

export default UserDrawer;

const styles = StyleSheet.create({});
