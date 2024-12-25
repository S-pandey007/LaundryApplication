import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Fontisto, Entypo, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a new account</Text>
      </View> */}
      <LottieView
        source={require('../assets/RegistrationAnimation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Fontisto name="person" size={24} color="black" />
          <TextInput placeholder='Enter name' style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Fontisto name="email" size={24} color="black" />
          <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputWrapper}>
          <Entypo name="key" size={24} color="black" />
          <TextInput placeholder='Enter new password' style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
        </View>
        <View style={styles.inputWrapper}>
          <Foundation name="telephone" size={24} color="black" />
          <TextInput placeholder='Phone number' style={styles.input} />
        </View>
      </View>

      <Pressable style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#088F8F',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
  animation: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    top:20
  },
  form: {
    marginVertical: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingVertical: 8,
  },
  registerButton: {
    backgroundColor: '#0B5E9E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  signInText: {
    fontSize: 16,
    color: '#0B5E9E',
    marginLeft: 5,
    fontWeight:'bold'
  },
});

export default RegisterScreen;