import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Movies from "../screens/Movies";
import Detail from "../screens/Detail";
import colors from "../style/colors";
import routes from "./routes";
import { Dimensions, Image } from "react-native";
import stylesMovies from "../screens/Movies/Movies.styles";

const Stack = createNativeStackNavigator();

const { MOVIES, DETAIL } = routes;

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MOVIES}
          component={Movies}
          options={{
            title: "",
            headerLeft: () => (
              <Image
                style={stylesMovies.headerIcon}
                source={require("../assets/Logo.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name={DETAIL}
          component={Detail}
          options={{
            title: "Movie Detail",
            headerBackTitleVisible: false,
            headerTintColor: colors.main,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
