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
import Programare from './screens/app/Programare';
import { TimeProvider } from './contexts/TimeProvider';
import { DateProvider } from './contexts/DateProvider';
import Landing from './screens/auth/Landing';
import LoginD from './screens/authDoctor/LoginD';

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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'Landing'}
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'LoginD'} component={LoginD} />
      {/*  <Stack.Screen name={'RegisterD'} component={RegisterD} />*/}
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  );
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [time, setTime] = useState('9:00');
  const [date, setDate] = useState('');

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
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
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
      <TimeProvider.Provider value={{ time, setTime }}>
        <DateProvider.Provider value={{ date, setDate }}>
          <NavigationContainer>
            {isLoggedIn ? StackNav() : AuthStack()}
          </NavigationContainer>
        </DateProvider.Provider>
      </TimeProvider.Provider>
    </View>
  );
}
