import { StyleSheet, Text, View, Alert, Pressable, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Crousel from '../components/carousel';
import Services from '../components/services';
import DressItem from '../components/DressItem';
const HomeScreen = () => {
    const [location, setLocation] = useState("We are loading your location");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkLocationPermission();
        getCurrentLocation();
    }, []);

    const checkLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                "Permission Denied",
                "Location permission is required to use this feature. Please enable it in settings.",
                [{ text: "OK" }]
            );
            setLocation("Permission to access location was denied.");
            setLoading(false);
            return;
        }
        const enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                "Location Services Disabled",
                "Please enable location services to continue",
                [{ text: "OK" }]
            );
            setLocation("Location services are disabled.");
            setLoading(false);
        }
    };

    const getCurrentLocation = async () => {
        try {
            setLoading(true);
            const { coords } = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = coords;
            const response = await Location.reverseGeocodeAsync({ latitude, longitude });
            if (response.length > 0) {
                const { name, district, city, postalCode } = response[0];
                setLocation(`${name}, ${district}, ${city}, ${postalCode}`);
            } else {
                setLocation("Unable to fetch address.");
            }
        } catch (error) {
            console.error(error);
            setLocation("Error fetching location.");
        } finally {
            setLoading(false);
        }
    };

    // Products list 
    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
          name: "shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
          name: "T-shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
          name: "dresses",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
          name: "jeans",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
          name: "Sweater",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
          name: "shorts",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
          name: "Sleeveless",
          quantity: 0,
          price: 10,
        },
      ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0',marginTop:50 }}>
            {/* Header */}
            <View style={styles.HeadView}>
                <Entypo name="location-pin" size={30} color="#FF2C2C" />
                <View>
                    <Text style={styles.HomeText}>Home</Text>
                    <Text style={styles.locationText}>{loading ? "Fetching location..." : location}</Text>
                </View>
                <Pressable style={{ marginLeft: 'auto', marginRight: 7 }}>
                    <Image style={styles.profileImage} source={{ uri: 'https://yt3.ggpht.com/yti/ANjgQV9v56tO5WccYmiXtKsAVQxg7KhnxfANPiyr56F1uDPSv68=s88-c-k-c0x00ffffff-no-rj' }} />
                </Pressable>
            </View>

            {/* Search Bar */}
            <View style={styles.searchView}>
                <TextInput style={{ padding: 3 }} placeholder="Search for items or more" />
                <FontAwesome name="search" size={20} color="black" />
            </View>

            {/* Carousel */}
            <Crousel />

            {/* services horizontal scroll view  */}
            <Services/>

            {/* product  */}
            {
                services.map((item,index)=>(
                    <DressItem item={item} key={index}/>
                ))
            }

            {/* 53:39 */}

        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    HeadView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        borderRadius: 5,
        marginHorizontal: 6,
        marginTop: 7,
    },
    HomeText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        marginBottom: 2,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    locationText: {
        fontSize: 14,
        color: 'black',
    },
    searchView: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.8,
        borderColor: '#D8D6D6',
        borderRadius: 7,
    },
});
