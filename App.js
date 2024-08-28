import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Profile from "./Screens/Profile";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Profile} />
        <Tab.Screen name="Inbox" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
