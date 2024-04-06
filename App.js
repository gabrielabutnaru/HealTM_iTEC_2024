import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import Categories from './screens/app/Categories';
import Home from './screens/app/Home';
import Profil from './screens/app/Profil';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase/config';
import Appointment from './screens/app/Appointment';
import Programare from './screens/app/Programare';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: '10%',
          backgroundColor: 'white',
          borderRadius: 32,
          shadowOffset: 0.4,
        },
        headerStyle: {
          backgroundColor: '#45D33D',
        },
      }}>
      <Tab.Screen name={'Programare'} component={Appointment} />

      <Tab.Screen
        name={'Specialități'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'reader-outline'}
              size={focused ? 34 : 28}
              color={focused ? '#F64048' : 'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#F64048',
        }}
      />
      <Tab.Screen
        name={'Profil'}
        component={Profil}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'person'}
              size={focused ? 32 : 26}
              color={focused ? '#F64048' : 'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#F64048',
        }}
      />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'TabNav'}
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'Categories'} component={Categories} />
      <Stack.Screen
        name={'Programare'}
        component={Programare}
        options={{ headerShown: false }}
      />
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

SplashScreen.preventAutoHideAsync();

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
  const [fontsLoaded, fontError] = useFonts({
    'Lexend-Black': require('./assets/fonts/Lexend-Black.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {isLoggedIn ? StackNav() : AuthStack()}
      </NavigationContainer>
    </View>
  );
}
