import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { Header, Overlay } from "react-native-elements";

export default class ViewDetailComponent extends Component {
  state = {
    shareModal: false,
    wishList: false
  };
  render() {
    const ImageUrl = this.props.navigation.getParam("image");
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
        <ScrollView>
          <View
            style={{
              backgroundColor: "#3c738a",
              height: 40,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <MaterialIcons name="location-on" size={25} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Delivers to You - New Delhi 110041
            </Text>
          </View>
          <View>
            <View
              style={{
                padding: 4,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 0
              }}
            >
              <Text style={{ fontSize: 16, color: "#558ddd" }}>
                {this.props.navigation.getParam("title")}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="md-star"
                  style={{ marginRight: 3 }}
                  color="gold"
                  size={24}
                />
                <Ionicons
                  name="md-star"
                  style={{ marginRight: 3 }}
                  color="gold"
                  size={24}
                />
                <Ionicons
                  name="md-star"
                  style={{ marginRight: 3 }}
                  color="gold"
                  size={24}
                />
                <Ionicons
                  name="md-star"
                  style={{ marginRight: 3 }}
                  color="gold"
                  size={24}
                />
                <Text
                  style={{ fontWeight: "100", fontSize: 10, color: "#dcdcdc" }}
                >
                  17
                </Text>
              </View>
            </View>
            <View style={{ padding: 8 }}>
              <Text>
                {" "}
                {this.props.navigation.getParam("title")}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </Text>
              <View
                style={{
                  width: 340,
                  height: 350,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 2,
                    borderRadius: 50
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.setState({ shareModal: true })}
                  >
                    <Ionicons name="md-share" color="#dcdcdc" size={25} />
                  </TouchableOpacity>
                </View>
                <Overlay
                  windowBackgroundColor="rgba(255, 255, 255, .5)"
                  isVisible={this.state.shareModal}
                  onBackdropPress={() => {
                    this.setState({ shareModal: false });
                  }}
                  overlayStyle={{ alignContent: "stretch" }}
                >
                  <View>
                    <View
                      style={{
                        backgroundColor: "black",
                        height: 40,
                        justifyContent: "center"
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 18, padding: 8 }}>
                        Share Item
                      </Text>
                    </View>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      style={{ top: 0, left: 0, right: 0 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          padding: 20,
                          alignItems: "center"
                        }}
                      >
                        <Ionicons name="logo-facebook" size={38} color="blue" />
                        <Text style={{ fontSize: 18, paddingLeft: 18 }}>
                          Facebook
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          padding: 20,
                          alignItems: "center"
                        }}
                      >
                        <Ionicons
                          name="logo-whatsapp"
                          size={38}
                          color="green"
                        />
                        <Text style={{ fontSize: 18, paddingLeft: 18 }}>
                          WhatsApp
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          padding: 20,
                          alignItems: "center"
                        }}
                      >
                        <Ionicons
                          name="md-bluetooth"
                          size={38}
                          color="lightblue"
                        />
                        <Text style={{ fontSize: 18, paddingLeft: 18 }}>
                          Bluetooth
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                </Overlay>
                <Image resizeMethod="resize" source={ImageUrl} alt="imae" />
                <View
                  style={{
                    position: "absolute",
                    bottom: 45,
                    left: 5,
                    borderRadius: 50
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ wishList: !this.state.wishList });
                    }}
                  >
                    <View>
                      {this.state.wishList ? (
                        <Ionicons name="md-heart" color="pink" size={30} />
                      ) : (
                        <Ionicons
                          name="md-heart-empty"
                          color="#dcdcdc"
                          size={30}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 10, marginTop: 0 }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "200", color: "#c1c1c3" }}
              >
                M.R.P.:
              </Text>
              <Text
                style={{ textDecorationLine: "line-through", paddingLeft: 20 }}
              >
                ${" "}
                {this.props.navigation.getParam("price") +
                  (this.props.navigation.getParam("price") * 5) / 100}
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <Text style={{ color: "#c1c1c3" }}>Price:</Text>
                <Text
                  style={{
                    color: "orangered",
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingLeft: 20
                  }}
                >
                  $ {this.props.navigation.getParam("price")}
                </Text>
              </View>
              <Text style={{ color: "blue", paddingLeft: 68 }}>
                FREE Delivery
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text style={{ color: "#c1c1c3" }}>You Save :</Text>
              <Text style={{ color: "orangered", paddingLeft: 20 }}>
                {" $ "}
                {(this.props.navigation.getParam("price") * 5) / 100}{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 68 }}>
              <Text style={{ fontWeight: "bold" }}>EMI </Text>
              <Text> from $325. No Cost EMI Available </Text>
            </View>
            <TouchableOpacity style={{ paddingLeft: 68 }}>
              <Text style={{ color: "blue" }}>OPTIONS</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 300, marginHorizontal: 22 }}>
            <View
              style={{
                borderWidth: 2,
                borderColor: "#c3c3c3",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <AntDesign name="setting" color="orangered" size={35} />
              <View
                style={{ flexDirection: "row", flexWrap: "wrap", padding: 8 }}
              >
                <Text style={{ color: "orangered", fontSize: 18 }}>
                  3 Special Offers:
                </Text>
                <Text>Avail No Cost EMI and pay price in ..</Text>
                <Text style={{ color: "blue" }}> + 2 more</Text>
              </View>
              <AntDesign
                style={{ right: 60 }}
                name="right"
                color="#c3c3c3"
                size={25}
              />
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "green", fontSize: 15 }}>In stock.</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ color: "green", fontWeight: "400" }}>
                Guranted{" "}
              </Text>
              <Text>delivert to pincode 110011 by </Text>
              <Text style={{ fontWeight: "bold" }}>Tomorrow </Text>
              <Text style={{ fontWeight: "bold" }}>
                9pm with One-Day Delivery
              </Text>
              <Text style={{ letterSpacing: 0 }}> --- </Text>
              <Text style={{ color: "green", fontWeight: "400" }}>
                5 hours and 14
              </Text>
              <Text style={{ color: "green", fontWeight: "400" }}>
                minute left
              </Text>
              <Text style={{ color: "blue" }}> Details</Text>
            </View>
            <View
              style={{ flexDirection: "row", marginTop: 4, flexWrap: "wrap" }}
            >
              <Text>Sold by</Text>
              <Text style={{ color: "blue" }}> Cloudtail India </Text>
              <Text>(4.6 out of 5 | 110, 984 ratings)</Text>
              <Text>and Fulfilled by Amazon</Text>
            </View>
            <View
              style={{
                height: 40,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <MaterialIcons name="location-on" size={25} color="#c3c3c3" />
              <Text style={{ color: "blue", fontSize: 16 }}>
                Delivers to You - New Delhi 110041
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              borderWidth: 1,
              borderColor: "orangered"
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  padding: 7,
                  backgroundColor: "orange",
                  alignItems: "center"
                }}
              >
                <Text>Buy Now</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              borderWidth: 1,
              borderColor: "orangered"
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  padding: 7,
                  backgroundColor: "gold",
                  alignItems: "center"
                }}
              >
                <Text>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{marginHorizontal: 15, marginTop: 20, borderBottomColor: '#dcdcdc', padding:10, borderBottomWidth: 1 }}>
            <Text style={{color: 'blue'}}>ADD TO WISHLIST</Text>
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    );
  }
}
