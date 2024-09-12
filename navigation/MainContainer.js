<<<<<<< HEAD
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Halaman
import Info from "../user/halamanpokok/info";
import Akun from "../user/halamanpokok/akun";
import Home from "../user/halamanpokok/home";

// Nama halaman
const infoName = "Info";
const akunName = "Akun";
const homeName = "Home";

const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation, handleLogout }) => {
  return (
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
              ? "information-circle"
              : "information-circle-outline";
          } else if (rn === akunName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#A6CE39", height: 70 },
        tabBarLabelStyle: { color: "white" },
        tabBarInactiveTintColor: "white",
        headerStyle: {
          backgroundColor: '#A6CE39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
              <Image
                source={require("../assets/logout.png")}
                style={styles.headerImage}
              />
            </TouchableOpacity>
          </View>
        ),
      })}
    >
      <Tab.Screen 
        name={homeName} 
        component={Home} 
        options={{ headerTitle: homeName }} 
      />
      <Tab.Screen 
        name={infoName} 
        component={Info} 
        options={{ headerTitle: infoName }} 
      />
      <Tab.Screen 
        name={akunName} 
        component={Akun} 
        options={{ headerTitle: akunName }} 
      />
    </Tab.Navigator>
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

export default MainContainer;
=======
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Halaman
import Info from "../user/halamanpokok/info";
import Akun from "../user/halamanpokok/akun";
import Home from "../user/halamanpokok/home";

// Nama halaman
const infoName = "Info";
const akunName = "Akun";
const homeName = "Home";

const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation, handleLogout }) => {
  return (
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
              ? "information-circle"
              : "information-circle-outline";
          } else if (rn === akunName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#A6CE39", height: 70 },
        tabBarLabelStyle: { color: "white" },
        tabBarInactiveTintColor: "white",
        headerStyle: {
          backgroundColor: '#A6CE39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
              <Image
                source={require("../assets/logout.png")}
                style={styles.headerImage}
              />
            </TouchableOpacity>
          </View>
        ),
      })}
    >
      <Tab.Screen 
        name={homeName} 
        component={Home} 
        options={{ headerTitle: homeName }} 
      />
      <Tab.Screen 
        name={infoName} 
        component={Info} 
        options={{ headerTitle: infoName }} 
      />
      <Tab.Screen 
        name={akunName} 
        component={Akun} 
        options={{ headerTitle: akunName }} 
      />
    </Tab.Navigator>
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

export default MainContainer;
>>>>>>> 8052cfa (Initial commit)
