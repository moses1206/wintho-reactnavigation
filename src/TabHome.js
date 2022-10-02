import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';

const TabHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Tab HomeScreen</Text>
      <Button
        title="Go To Home Stack Screen"
        onPress={() => navigation.navigate('StackHome')}
      />
    </View>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
