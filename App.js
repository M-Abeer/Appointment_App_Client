import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Search from "./Screens/Search";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/home.png")}
                style={{
                  width: 25,
                  width: 25,
                  height: size,
                  // tintColor: focused ? color : "gray",
                }}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Top Developers"
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/search.png")}
                style={{
                  width: size,
                  height: size,
                  // tintColor: focused ? color : "gray",
                }}
              />
            ),
          }}
          component={Search}
        />
        <Tab.Screen
          name="Profile"
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/user.png")}
                style={{
                  width: size,
                  height: size,
                  // tintColor: focused ? color : "gray",
                }}
              />
            ),
          }}
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
