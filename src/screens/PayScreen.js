import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Header, Overlay } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: "#587795"
          }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          rightComponent={{ icon: "shopping-cart", color: "#fff" }}
          centerComponent={{
            text: "Shop Home",
            style: { fontSize: 18, fontWeight: "bold", color: "#fff" }
          }}
        />
        <View style={{ alignItems: "center", padding: 18 }}>
          <Text> Instance bank to bank transfer </Text>
        </View>
        <View>
          <Image
            style={{ width: Dimensions.get("window"), height: 200 }}
            source={require("../../assets/sendMoney.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", padding: 8, flexWrap: "wrap" }}>
          <Entypo name="info" color="blue" size={14} />
          <Text>
            SMS will besent to erify mobilw=e number. By clicking on Proceed,
            you agree to{" "}
          </Text>
          <Text style={{ color: "blue" }}>Term & Condition</Text>
        </View>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: "orangered", marginTop: 5 }}
        >
          <Text style={{ paddingVertical: 8, paddingHorizontal: 35 }}>
            Proceed
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#dcdcdc" }}>
            Standard SMS charges may apply.
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5
          }}
        >
          <Text style={{ color: "blue" }}>Cancle</Text>
        </View>
      </View>
    );
  }
}
