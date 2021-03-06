import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/05_Pages/SignUp/SignUp';
import Login from './components/05_Pages/Login/Login';
import Profile from './components/05_Pages/Profile/Profile';
import AppContext from './components/AppContext';

const Stack = createStackNavigator();
function App() {
  const [currUser, setCurrUser] = useState({});

  const userSettings = {
    user: currUser,
    setCurrUser
  };

  return (
    <AppContext.Provider value={userSettings}>

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" options={{ title: null }} component={SignUp} />
      <Stack.Screen name="Login" options={{ title: null }} component={Login} />
      <Stack.Screen name="Profile" options={{ title: null }} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>

  );
}

export default App;