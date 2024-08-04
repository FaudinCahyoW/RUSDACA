import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from "./user/loginregis/login";
import Register from "./user/loginregis/register";
import MainContainer from "./navigation/MainContainer";
import InputData from "./user/loginregis/entry";

const Stack = createStackNavigator();

const getIsSignedIn = async () => {
  const token = await AsyncStorage.getItem('token');
  return token !== null;
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const signedIn = await getIsSignedIn();
      setIsSignedIn(signedIn);
    };
    checkToken();
  }, []);

  const handleLogout = async (navigation) => {
    await AsyncStorage.removeItem('token');
    setIsSignedIn(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  if (isSignedIn === null) {
    // Render a loading screen or nothing while checking the token
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? "MainContainer" : "Login"}>
        <Stack.Screen
          name="Login"
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#A6CE39',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        >
          {props => <LoginForm {...props} setIsSignedIn={setIsSignedIn} />}
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Daftar Akun',
            headerStyle: {
              backgroundColor: '#A6CE39',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="MainContainer"
          options={{ headerShown: false }}
        >
          {props => <MainContainer {...props} handleLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen
          name="Entry"
          options={({ navigation }) => ({
            headerTitle: "Masukkan Data",
            headerStyle: {
              backgroundColor: '#A6CE39',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('MainContainer')}>
                <Image
                  source={require("./assets/back.png")}
                  style={styles.headerImage}
                />
              </TouchableOpacity>
            ),
          })}
        >
          {props => <InputData {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 22,
    height: 24,
    marginRight: 10,
  },
});

export default App;
