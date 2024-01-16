import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Stack} from 'expo-router'

//Halaman
import Info from "../user/halamanpokok/info";
import Akun from "../user/halamanpokok/akun";
import Home from "../user/halamanpokok/home";
import Profil from "../user/halamanpokok/profil";

//nama halaman
const infoName = "Info";
const akunName = "Akun";
const homeName = "Home";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                  iconName = focused ? "home" : "home-outline";
                } else if (rn === infoName) {
                  iconName = focused
                    ? "information-circle-outline"
                    : "information-circle-outline";
                } else if (rn === akunName) {
                  iconName = focused ? "person" : "person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarStyle: { backgroundColor: "#A6CE39", height: 70 },
              tabBarLabelStyle: { color: "white" },
              tabBarInactiveTintColor: "white",
            })}
          >
            <Tab.Screen
              name={homeName}
              component={Home}
              options={{
                title: "Home",
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
            <Tab.Screen
              name={infoName}
              component={Info}
              options={{
                title: "Info",
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
            <Tab.Screen
              name={akunName}
              component={Akun}
              options={{
                title: "Akun",
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
          </Tab.Navigator>

        </NavigationContainer>
    </>
  );
};
export default MainContainer;
