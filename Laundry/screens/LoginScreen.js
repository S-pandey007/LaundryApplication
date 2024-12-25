import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "Android" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Sign In to your account</Text>
        </View>
        <LottieView
          source={require('../assets/LoginAnimation.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}/>
          </View>
          <View style={styles.inputWrapper}>
            <Entypo name="key" size={24} color="black" />
            <TextInput placeholder='Password' style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
          </View>
        </View>
        <Pressable style={styles.loginButton} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={()=>navigation.navigate("Register")} >
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
    top:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#0B5E9E'
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  animation: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  inputContainer: {
    marginVertical: 20,
    bottom:50
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
  loginButton: {
    backgroundColor: '#0B5E9E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    bottom:60
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom:40
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
  signUpText: {
    fontSize: 16,
    color: '#0B5E9E',
    fontWeight: 'bold',
    marginLeft: 5,
  },
})

export default LoginScreen