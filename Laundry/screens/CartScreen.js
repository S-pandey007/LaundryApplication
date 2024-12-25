import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartReducer";
import { decreaseQty, increaseQty } from "../redux/productReducer";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  return (
    <>
      <ScrollView style={{ marginTop: 20 }}>
        {total === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginTop: 40 }}> Cart is Empty</Text>
          </View>
        ) : (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                onPress={() => navigation.navigate("Home")}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text>Your Bucket</Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      width: 100,
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Text>

                  {/* -+ button */}
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decreaseQuantity(item));
                        dispatch(decreaseQty(item));
                      }}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 13,
                        backgroundColor: "#FF2C2C",
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: "white",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "#FF2C2C",
                          fontWeight: "bold",
                          marginHorizontal: 10,
                        }}
                      >
                        {cart.find((c) => c.id === item.id)?.quantity || 0}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(increaseQuantity(item));
                        dispatch(increaseQty(item));
                      }}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 13,
                        backgroundColor: "#FF2C2C",
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: "white",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>

                  <Text
                    style={{
                      width: 100,
                      fontSize: 16,
                      fontWeight: "500",
                      left: "20%",
                    }}
                  >
                    $ {item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </Pressable>

            {/* Billing details */}

            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ marginTop: 30, fontSize: 14, fontWeight: "bold" }}>
                Billing Details
              </Text>

              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "gray",
                    }}
                  >
                    Item Total
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                    }}
                  >
                    ${total}
                  </Text>
                </View>

                <View style={styles.deliveryFeeContainer}>
                  <Text style={styles.deliveryFeeText}>Delivery Fee | $1.23</Text>
                  <Text style={styles.freeText}>Free</Text>
                </View>

                <View style={styles.freeDeliveryContainer}>
                  <Text style={styles.freeDeliveryText}>Free Delivery on Your order</Text>
                </View>

                <View style={styles.separator} />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    selected Date
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "gray",
                    }}
                  >
                    Pic Date
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    No Of Days
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.no_of_days}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    selected Pick Up Time
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {total + 95}
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "rgba(255, 44, 44, 0.9)",
            padding: 15,
            marginBottom: 10,
            marginTop: "auto",
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
              Place Order
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  deliveryFeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  deliveryFeeText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  freeText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#088F8F',
  },
  freeDeliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  freeDeliveryText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  separator: {
    borderColor: 'gray',
    height: 1,
    borderWidth: 0.5,
    marginVertical: 10,
  },
});

export default CartScreen;
