import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Logoicon from './assets/pics/home_icon.png';
import {CommonActions} from '@react-navigation/native';

const CustomSideDrawer = ({navigation}) => {
  const navigateToScreen = route => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image style={{width: 40, height: 40}} source={Logoicon} />
          </View>
          <Text style={styles.sectionPadding}>Section1</Text>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('HomeDrawer')}>
              Home
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('UserDrawer')}>
              User
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={() => alert('Help Window')}>
              Help
            </Text>
            <Text style={styles.navItemStyle} onPress={() => alert('Info')}>
              Info
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingLeft: 10, paddingBottom: 30}}>
        <Text>Copyright @buho, 2022</Text>
      </View>
    </View>
  );
};

export default CustomSideDrawer;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 80},
  imageContainer: {alignItems: 'center', padding: 50},
  sectionPadding: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});
