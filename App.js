import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import Categories from './screens/app/Categories';
import Home from './screens/app/Home';
import Profil from './screens/app/Profil';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/config';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: '10%',
          backgroundColor: '#F1F5A8',
          borderRadius: 10,
          shadowOffset: 0.2,
        },
        headerStyle: {
          backgroundColor: '#45D33D',
        },
      }}>
      <Tab.Screen
        name={'Profil'}
        component={Profil}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'user'}
              size={focused ? 32 : 26}
              color={focused ? '#A5DD9B' : 'gray'}
            />
          ),
          tabBarInactiveTintColor: '#F1F5A8',
          tabBarActiveTintColor: '#F1F5A8',
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'home'}
              size={focused ? 32 : 26}
              color={focused ? '#A5DD9B' : 'gray'}
            />
          ),
          tabBarInactiveTintColor: '#F1F5A8',
          tabBarActiveTintColor: '#F1F5A8',
          headerShown: false,
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name={'Profil'}*/}
      {/*  component={Profil}*/}
      {/*  options={{*/}
      {/*    tabBarIcon: ({ focused }) => (*/}
      {/*      <Ionicons*/}
      {/*        name={'user'}*/}
      {/*        size={focused ? 32 : 26}*/}
      {/*        color={focused ? '#A5DD9B' : 'gray'}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    tabBarInactiveTintColor: '#F1F5A8',*/}
      {/*    tabBarActiveTintColor: '#F1F5A8',*/}
      {/*  }}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'TabNav'} component={TabNav} />
      <Stack.Screen name={'Categories'} component={Categories} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  );
};
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        console.log(auth);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? StackNav() : AuthStack()}
    </NavigationContainer>
  );
}
