import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OnBoardingScreen,
  LoginScreen,
  RegisterScreen,
  ForgetScreen,
  ChangePassScreen,
} from "../screens";
import User from "./User";
import AdminTab from "./AdminTab";
import { AuthContext } from "../store/auth-context";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Admin" component={AdminTab} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
      <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} />
    </Stack.Navigator>
  );
}
function UserStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={User} />
    </Stack.Navigator>
  );
}
function AdminStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Admin" component={AdminTab} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {authContext.isAuthenticated ? <UserStack /> : <AuthStack />} */}
      {true ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
