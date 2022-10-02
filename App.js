// In App.js in a new project
import * as React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/Home';
import User from './src/User';
import LogoPic from './src/LogoPic';
import PictogramHome from './src/assets/pics/home_icon.png';
import HomeDrawer from './src/HomeDrawer';
import UserDrawer from './src/UserDrawer';
import CustomSideDrawer from './src/CustomSideDrawer';
import TabHome from './src/TabHome';
import TabUser from './src/TabUser';
import TabMessage from './src/TabMessage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         icon={() => <LogoPic />}
//         activeBackgroundColor="skyblue"
//         onPress={() => Linking.openURL('http://www.google.com')}
//       />
//       <DrawerItem
//         activeTintColor="red"
//         label="Info"
//         onPress={() => alert('Info Window')}
//       />
//     </DrawerContentScrollView>
//   );
// }

function App() {
  // const logoTitle = () => (
  //   <Image
  //     style={{width: 40, height: 40}}
  //     source={require('./src/assets/pics/home_icon.png')}
  //   />
  // );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconImagePath;

            if (route.name === 'Home') {
              iconImagePath = require('./src/assets/pics/home_icon.png');
            } else if (route.name === 'User') {
              iconImagePath = require('./src/assets/pics/userIcon.png');
            } else if (route.name === 'Message') {
              iconImagePath = require('./src/assets/pics/message.png');
            }

            // You can return any component that you like here!
            return (
              <Image
                style={{width: focused ? 28 : 20, height: focused ? 28 : 20}}
                source={iconImagePath}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'skyblue',
          tabBarInactiveBackgroundColor: '#c6cbef',
          tabBarLabelPosition: 'below-icon',
        })}>
        <Tab.Screen name="Home" component={TabHome} />
        <Tab.Screen name="User" component={TabUser} />
        <Tab.Screen name="Message" component={TabMessage} />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   {/* drawerType = "front" 드로워가 화면전환이 아닌 전화면을 뒤로두고 앞으로 덮는형태 */}
    //   <Drawer.Navigator
    //     drawerContent={props => <CustomSideDrawer {...props} />}
    //     initialRouteName="HomeDrawer"
    //     screenOptions={{
    //       drawerStyle: {
    //         backgroundColor: '#c6cbef',
    //         width: 200,
    //       },
    //       drawerPosition: 'left',
    //       drawerType: 'slide',
    //     }}>
    //     <Drawer.Screen
    //       options={{
    //         drawerIcon: () => (
    //           <Image style={{width: 40, height: 40}} source={PictogramHome} />
    //         ),
    //       }}
    //       name="HomeDrawer"
    //       component={HomeDrawer}
    //     />
    //     <Drawer.Screen name="UserDrawer" component={UserDrawer} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

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
