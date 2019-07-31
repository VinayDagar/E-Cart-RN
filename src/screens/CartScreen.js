import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class CartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 28, padding: 12 }}>Your Cart is Empty</Text>
          <MaterialIcons name="add-shopping-cart" color="blue" size={50} />
        </View>
        <TouchableOpacity
        style={{padding: 12}}
          onPress={() => this.props.navigation.navigate("home")}
        >
          <Text style={{ color: "blue" }}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
