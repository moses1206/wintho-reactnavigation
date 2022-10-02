// In App.js in a new project
import * as React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import StackHome from './src/StackHome';
import StackUser from './src/StackUser';
import LogoPic from './src/LogoPic';
import PictogramHome from './src/assets/pics/home_icon.png';
import CustomSideDrawer from './src/CustomSideDrawer';
import TabHome from './src/TabHome';
import TabUser from './src/TabUser';
import TabMessage from './src/TabMessage';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

/* 
  Stack Navigator
    - Drawer Navigator
        - Drawer Screen A
        - Drawer Screen B
        - Tab Navigator
            - Tab Screen C
            - Tab Screen D
    - Stack Screen  E
    - Stack Screen  F
*/

const TabComoponent = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let iconSize;

        if (route.name === 'TabHome') {
          iconName = 'home-outline';
        } else if (route.name === 'TabUser') {
          iconName = 'people-outline';
        } else if (route.name === 'TabMessage') {
          iconName = 'mail-outline';
        }

        iconSize = focused ? 30 : 20;

        return <Ionicons name={iconName} size={iconSize} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: 'skyblue',
      tabBarInactiveBackgroundColor: '#c6cbef',
      tabBarLabelPosition: 'below-icon',
      headerShown: false,
    })}>
    <Tab.Screen name="TabHome" component={TabHome} />
    <Tab.Screen name="TabUser" component={TabUser} />
    <Tab.Screen name="TabMessage" component={TabMessage} />
  </Tab.Navigator>
);

const DrawerComponent = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomSideDrawer {...props} />}
    initialRouteName="HomeDrawer"
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 200,
      },
      drawerPosition: 'left',
      drawerType: 'slide',
      headerShown: false,
    }}>
    <Drawer.Screen name="Route" component={TabComoponent} />
  </Drawer.Navigator>
);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity>
        <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          Open
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={DrawerComponent}
          options={{headerRight: ({}) => <HeaderRight />}}
        />
        <Stack.Screen name="StackHome" component={StackHome} />
        <Stack.Screen name="StackUser" component={StackUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
