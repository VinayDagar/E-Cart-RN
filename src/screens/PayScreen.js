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
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Instance bank to bank transfer{" "}
          </Text>
        </View>
        <View style={{ width: 320, height: 120 }}>
          <Image
            style={{ flex: 1, width: "100%" }}
            source={require("../../assets/sendMoney.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", padding: 8, flexWrap: "wrap", marginTop: 10 }}>
          <View style={{flexDirection: 'row', paddingVertical: 8, flexWrap: "wrap"}} >
            <Entypo name="info" color="blue" size={10} />
            <Text style={{fontSize: 10}} >
              SMS will be sent to verify mobile number. By clicking on, Proceed,
              you agree to{" "}
            </Text>
          <Text style={{ color: "blue", fontSize: 10 }}>Term & Condition</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "orangered",
            marginTop: 5,
            paddingVertical: 8,
            alignItems: "center",
            backgroundColor: "orange",
            width: 330,
            alignSelf: 'center'
          }}
        >
          <Text style={{ paddingVertical: 8, fontWeight: 'bold' }}>
            Proceed
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
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
