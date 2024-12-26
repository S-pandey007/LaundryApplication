import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Ionicons name="person" size={80} color="#088F8F" style={styles.icon} />
        <Text style={styles.label}>User Name:</Text>
        <Text style={styles.name}>{user?.name || "User Name"}</Text>
        <Text style={styles.label}>User Email:</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.label}>User Phone Number:</Text>
        <Text style={styles.phone}>{user?.phone || "Phone Number"}</Text>
      </View>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    top: 30,
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
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#088F8F',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});