import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Home, ArticleList } from "./screens";

const theme = {
  ...DefaultTheme,
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ArticleList" component={ArticleList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
