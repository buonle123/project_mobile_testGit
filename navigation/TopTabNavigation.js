import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AwaitingConFirm from "../screens/UserScreen/StatusDelivery/AwaitingConFirmScreen";
import AwatingGoods from "../screens/UserScreen/StatusDelivery/AwatingGoodsScreen";
import AwaitingDelivery from "../screens/UserScreen/StatusDelivery/AwaitingDeliveryScreen";
import SuccsesScreen from "../screens/UserScreen/StatusDelivery/SuccsesScreen";
const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#FF5678",
        },
        tabBarActiveTintColor: "#FF5678",
        tabBarInactiveTintColor: "gray",
        tabBarShowIcon: true,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 150,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          textTransform: "none",
        },
        style: {
          // backgroundColor: ,
        },
      }}
    >
      <Tab.Screen
        name="Awaiting Confirm"
        component={AwaitingConFirm}
        options={{
          tabBarLabel: "Chờ xác nhận",
        }}
      />
      <Tab.Screen
        name="Awaiting Goods"
        component={AwatingGoods}
        options={{
          tabBarLabel: "Chờ lấy hàng",
        }}
      />
      <Tab.Screen
        name="Awaiting Delivery"
        component={AwaitingDelivery}
        options={{
          tabBarLabel: "Chờ giao hàng",
        }}
      />
      <Tab.Screen
        name="Succses"
        component={SuccsesScreen}
        options={{
          tabBarLabel: "Giao hàng thành công",
        }}
      />
    </Tab.Navigator>
  );
};
export default TopTabNavigation;
