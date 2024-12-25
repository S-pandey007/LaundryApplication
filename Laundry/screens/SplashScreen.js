import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation) {
      const timer = setTimeout(() => {
        navigation.navigate("Login");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/Animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      {/* <Text style={styles.text}>WashNow</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color
  },
  animation: {
    width: 400, // Adjust as needed
    height: 400, // Adjust as needed
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    color: '#088F8F', // Text color
    fontWeight: 'bold',
  },
});

export default SplashScreen;
