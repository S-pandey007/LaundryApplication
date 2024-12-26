import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
// import Ionicons from "@expo/vector-icons/Ionicons";
export default function ProfileScreen() {
  const [userInfo, setUserInfo] = useState({
    name: "User Name",
    email: "User Email",
    phone: "Phone Number",
  });

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserInfo({
            name: userData.name || "No name available",
            email: userData.email || "No email available",
            phone: userData.phone || "No phone number available",
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(err => {
        console.error("Error during logout:", err);
      });
  };

  return (
    <View style={styles.container}>
      <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
      <View style={styles.header}>
      
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={80} color="#088F8F" style={styles.icon} />
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name:</Text>
        </View>
        <View>
        <Text style={styles.infoText}>{userInfo.name}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          
        </View>
        <View>
        <Text style={styles.infoText}>{userInfo.email}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          
        </View>
        <View>
        <Text style={styles.infoText}>{userInfo.phone}</Text>
        </View>
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
    padding: 20,
    backgroundColor: '#f0f4f8',
    top: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  profileContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    flexShrink: 1, // Handles overflow for long text
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#088F8F',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

