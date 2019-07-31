import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Ionicons, Entypo } from "@expo/vector-icons";

export default class ScanComponrnt extends React.Component {
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    scanned: false
  };

  handleBarCodeScanned = (data) => {
    console.log('scanned')
    this.props.navigation.navigate('home')
    console.log(`Bar code with type and data ${data} has been scanned!`);
  };

  render() {
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     flexDirection: "column",
      //     justifyContent: "flex-end"
      //   }}
      // >
        <BarCodeScanner
        type={BarCodeScanner.Constants.Type.back}
        style={{height: 300, width: 300}}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeRead={this.handleBarCodeScanned}
          onBarCodeScanned ={this.handleBarCodeScanned}
          onBarCodeScanned ={()=> this.handleBarCodeScanned}
          // style={StyleSheet.absoluteFillObject}
        />

      // </View>
      // <Camera
      //   style={{ flex: 1 }}
      //   type={this.state.type}
      //   barCodeScannerSettings={{
      //     barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
      //   }}
      //   onBarCodeScanned={(data) => console.log(data, 'scanned data')}
      // >
      //   <View
      //     style={{
      //       flex: 1,
      //       backgroundColor: 100,
      //       flexDirection: "row"
      //     }}
      //   >
      //     <TouchableOpacity
      //       style={{
      //         position: "absolute",
      //         top: 50,
      //         right: 20
      //       }}
      //       onPress={() => {}}
      //     >
      //       <Entypo name="cross" color="#fff" size={35} />
      //     </TouchableOpacity>

      //     <TouchableOpacity
      //       style={{
      //         position: "absolute",
      //         top: 90,
      //         right: 20
      //       }}
      //       onPress={() => {}}
      //     >
      //       <Entypo name="flash" color="#fff" size={35} />
      //     </TouchableOpacity>

      //     <TouchableOpacity
      //       style={{
      //         position: "absolute",
      //         top: 130,
      //         right: 20
      //       }}
      //       onPress={() => {}}
      //     >
      //       <Entypo name="help-with-circle" color="#fff" size={35} />
      //     </TouchableOpacity>
      //   </View>
      //   <View
      //     style={{
      //       borderWidth: 2,
      //       borderColor: "#dcdcdc",
      //       width: 200,
      //       height: 200,
      //       position: "absolute",
      //       backgroundColor: "transparent",
      //       alignSelf: "center",
      //       marginTop: 220
      //     }}
      //   />
      // </Camera>
    );
  }
}
