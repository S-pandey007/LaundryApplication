import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
const OrderScreen = () => {
  // Parse string back to Date

  return (
    <SafeAreaView>
      <LottieView
        source={require("../assets/thumbs.json")}
        autoPlay
        loop={false}
        speed={0.7}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Your Order has been placed successfully
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        autoPlay
        loop={false}
        speed={0.7}
        style={{
          height: 300,
          position: "absolute",
          width: 300,
          top:100,
          alignSelf: "center",
    
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrderScreen;
