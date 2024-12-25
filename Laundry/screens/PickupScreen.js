import { View, Text, SafeAreaView, TextInput, ScrollView, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const PickupScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(""); // Single selection
  const[delivery, setDelivery] = useState(""); // Single selection
  const navigation = useNavigation()
  const [height, setHeight] = useState(40);
  const total = cart
  .map((item) => item.price * item.quantity)
  .reduce((a, b) => a + b, 0);
  const deliveryTime = [
    { id: "0", name: "2-3 Days" },
    { id: "1", name: "3-4 Days" },
    { id: "2", name: "4-5 Days" },
    { id: "3", name: "5-6 Days" },
    { id: "4", name: "Tomorrow" },
  ];

  const times = [
    { id: "0", time: "11:00 PM" },
    { id: "1", time: "12:00 PM" },
    { id: "2", time: "1:00 PM" },
    { id: "3", time: "2:00 PM" },
    { id: "4", time: "3:00 PM" },
    { id: "5", time: "4:00 PM" },
  ];

  const proceedToCart =()=>{
    if(!selectedDate || !selectedTime || !delivery){
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text:"Cancel",
            onPress:()=> console.log("Cancel Pressed"),
            style:'cancel'
            
          },
          {
            text:"OK",
            onPress: ()=>console.log("OK Pressed")
            
          }          
        ],
        { cancelable: false }
      )
    }

    if(selectedDate && selectedTime && delivery){
      navigation.replace("Cart",{

        selectedTime:selectedTime,
        pickUpDate:selectedDate,
        no_of_days:delivery,
      })
    }
  }

  return (
    <>
    <SafeAreaView style={{ paddingTop: 30 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Enter Your Address</Text>
      <TextInput
       multiline={true} // Enables multi-line input
       onContentSizeChange={(event) =>
         setHeight(event.nativeEvent.contentSize.height)
       }
        style={{
          paddingHorizontal: 6,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 20,
          borderRadius: 9,
          margin: 5,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Pick Up Date</Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2025-01-01")}
        endDate={new Date("2025-02-01")}
        initialSelectedDate={new Date()}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={140}
        unselectedItemWidth={40}
        itemHeight={40}
        itemRadius={10}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Select Time</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {times.map((item) => (
          <Pressable
            key={item.id}
            style={{
              margin: 10,
              borderRadius: 7,
              padding: 10,
              borderColor: selectedTime === item.time ? "#FF2C2C" : "gray",
              borderWidth: 0.7,
              backgroundColor: selectedTime === item.time ? "#FFEEEE" : "#fff",
            }}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text>{item.time}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Delivery Date</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {deliveryTime.map((item) => (
          <Pressable
            key={item.id}
            style={{
              margin: 10,
              borderRadius: 7,
              padding: 10,
              borderColor: delivery === item.name ? "#FF2C2C" : "gray",
              borderWidth: 0.7,
              backgroundColor: delivery === item.name ? "#FFEEEE" : "#fff",
            }}
            onPress={() => setDelivery(item.name)}
          >
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

    </SafeAreaView>

        {total === 0 ? null : (
                <Pressable
                  style={{
                    backgroundColor: "rgba(255, 44, 44, 0.9)",
                    padding: 15,
                    marginBottom: 10,
                    marginTop:'auto',
                    margin: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 7,
                  }}
                >
                  <View>
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                      {cart.length} items | Total: ${total}
                    </Text>
                    <Text style={{ color: "#fff" }}>Extra charges might apply</Text>
                  </View>
                  <Pressable
        
                  onPress={proceedToCart}
                    style={{
                      backgroundColor: "#FF2C2C",
                      padding: 10,
                      borderWidth: 2,
                      borderColor: "#fff",
                      borderRadius: 7,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 4,
                      elevation: 5,
                    }}
                  >
                    <Text
                      style={{ color: "#fff", fontWeight: "bold", textAlign: "right" }}
                    >
                      Proceed to Cart
                    </Text>
                  </Pressable>
                </Pressable>
              )}
    </>
  );
};
// 1:53:25
export default PickupScreen;
