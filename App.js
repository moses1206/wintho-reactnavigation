// In App.js in a new project
import * as React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/Home';
import User from './src/User';
import LogoPic from './src/LogoPic';
import HomeDrawer from './src/HomeDrawer';
import UserDrawer from './src/UserDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  // const logoTitle = () => (
  //   <Image
  //     style={{width: 40, height: 40}}
  //     source={require('./src/assets/pics/home_icon.png')}
  //   />
  // );

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
        <Drawer.Screen name="UserDrawer" component={UserDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     // 모든 네비게이션에 공통의 스택 스타일 적용
    //     screenOptions={{
    //       headerStyle: {backgroundColor: 'yellow'},
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         headerTintColor: '#fff',
    //         fontWeight: 'bold',
    //         color: 'purple',
    //       },
    //     }}>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         title: 'Home Screen',
    //         headerTitle: LogoPic,
    //         headerRight: () => (
    //           <Button
    //             title="info"
    //             onPress={() => alert('I am a Button!!')}
    //             color="orange"
    //           />
    //         ),
    //       }}
    //     />
    //     <Stack.Screen
    //       name="User"
    //       component={User}
    //       //스택 생성시 Root Params 초기화
    //       initialParams={{
    //         userIdx: 50,
    //         userName: 'GilDong',
    //         userLastName: 'Go',
    //       }}
    //       // 단일 스택의 스타일 변경
    //       options={{
    //         title: 'User Screen',
    //         headerStyle: {backgroundColor: 'pink'},
    //         headerTintColor: 'red',
    //         headerTitleStyle: {fontWeight: 'bold', color: 'purple'},
    //         headerBackTitle: 'BACK',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
