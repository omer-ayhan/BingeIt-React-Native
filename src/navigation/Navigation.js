import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Movies from "../screens/Movies";
import Detail from "../screens/Detail";
import colors from "../style/colors";
import routes from "./routes";

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
            title: "Movies",
            headerTitleAlign: "center",
            headerTintColor: colors.main,
          }}
        />
        <Stack.Screen
          name={DETAIL}
          component={Detail}
          options={{
            title: "Detail",
            headerTintColor: colors.main,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
