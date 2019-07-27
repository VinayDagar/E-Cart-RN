import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import TopDealsComponent from "./src/screens/TopDealsComponent";

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 100,
        paddingTop: 40,
        paddingBottom: 20,
        paddingRight: 10,
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
    home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Home </Text>
          </View>
        )
      }
    },
    category: {
      screen: CategoryScreen,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Select your category </Text>
          </View>
        )
      }
    },
    deals: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View
            style={{
              borderBottomColor: "#dcdcdc",
              borderBottomWidth: 2,
              width: 300,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                left: 15,
                margin: 15
              }}
            >
              <Text>Today's Deals </Text>
            </View>
          </View>
        ),
        drawerLabelStyle: { fontSize: 10 },
        style: { borderBottom: 1, borderBottomColor: "#dcdcdc" }
      }
    },
    orders: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Your Orders </Text>
          </View>
        )
      }
    },
    buyAgain: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Buy Again </Text>
          </View>
        )
      }
    },
    wishList: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Your Wish List </Text>
          </View>
        )
      }
    },
    account: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Your Account </Text>
          </View>
        )
      }
    },
    pay: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Amazon Pay </Text>
          </View>
        )
      }
    },
    prime: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Try Prime </Text>
          </View>
        )
      }
    },
    sell: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Sell on Amazon </Text>
          </View>
        )
      }
    },
    feature: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Programs and Features </Text>
          </View>
        )
      }
    },
    special: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View
            style={{
              borderBottomColor: "#dcdcdc",
              borderTopColor: "#dcdcdc",
              borderBottomWidth: 2,
              borderTopWidth: 2,
              width: 280,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                margin: 15,
                left: 15,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text> Special on Spark </Text>
              <FontAwesome
                name="odnoklassniki"
                size={30}
                style={{ bottom: 8, right: 20 }}
                color="orange"
              />
            </View>
          </View>
        )
      }
    },
    language: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Language A/& </Text>
          </View>
        )
      }
    },
    notification: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Your Notification </Text>
          </View>
        )
      }
    },
    settings: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15, width: 250 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text> Settings </Text>
              <AntDesign name="right" size={25} style={{right: 20}} color="#dcdcdc" />
            </View>
          </View>
        )
      }
    },
    service: {
      screen: TopDealsComponent,
      navigationOptions: {
        drawerLabel: (
          <View style={{ left: 15, margin: 15 }}>
            <Text> Customer Service </Text>
          </View>
        )
      }
    }
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
