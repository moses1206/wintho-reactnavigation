import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const HomeDrawer = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Move User"
        onPress={() => navigation.navigate('UserDrawer')}
      />
    </View>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({});
