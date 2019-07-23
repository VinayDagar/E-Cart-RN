import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#00BFFF"
      }}
    >
      <View
        style={{
          height: 60,
          width: 60,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff"
        }}
      >
        <Ionicons name="md-person" color="#DCDCDC" size={50} />
      </View>
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
        {" "}
        Shop Home{" "}
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppDrawer = createDrawerNavigator(
  {
    home: HomeScreen,
    category: CategoryScreen
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const AppContainer = createAppContainer(AppDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
