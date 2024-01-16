import React, { useState } from "react";
import LoginForm from "./user/loginregis/login";
import Register from "./user/loginregis/register";
// import Home from "./user/halamanpokok/home";
import MainContainer from "./navigation/MainContainer";
import Profil from "./user/halamanpokok/profil";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{
              title: "Login",
              headerStyle: {
                backgroundColor: "#A6CE39",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Daftar Akun",
              headerStyle: {
                backgroundColor: "#A6CE39",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
          />
          {/* <Stack.Screen
      name="Home"
      component={Home}
    /> */}
          <Stack.Screen
            name="Home"
            component={MainContainer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
