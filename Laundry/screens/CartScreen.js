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
            <View style={styles.header}>
              <Ionicons
                onPress={() => navigation.navigate("Home")}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text style={styles.headerText}>Your Bucket</Text>
            </View>

            <Pressable style={styles.cartContainer}>
              {cart.map((item, index) => (
                <View key={index} style={styles.cartItem}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  {/* -+ button */}
                  <Pressable style={styles.quantityContainer}>
                    <Pressable
                      onPress={() => {
                        dispatch(decreaseQuantity(item));
                        dispatch(decreaseQty(item));
                      }}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </Pressable>

                    <Pressable>
                      <Text style={styles.quantityText}>
                        {cart.find((c) => c.id === item.id)?.quantity || 0}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(increaseQuantity(item));
                        dispatch(increaseQty(item));
                      }}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </Pressable>
                  </Pressable>

                  <Text style={styles.itemPrice}>
                    $ {item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </Pressable>

            {/* Billing details */}

            <View style={{ marginHorizontal: 10 }}>
              <Text style={styles.billingTitle}>Billing Details</Text>

              <View style={styles.billingContainer}>
                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>Item Total</Text>
                  <Text style={styles.billingText}>${total}</Text>
                </View>

                <View style={styles.deliveryFeeContainer}>
                  <Text style={styles.deliveryFeeText}>Delivery Fee | $1.23</Text>
                  <Text style={styles.freeText}>Free</Text>
                </View>

                <View style={styles.freeDeliveryContainer}>
                  <Text style={styles.freeDeliveryText}>Free Delivery on Your order</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>selected Date</Text>
                  <Text style={styles.billingText}>Pic Date</Text>
                </View>

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>No Of Days</Text>
                  <Text style={styles.billingText}>{route.params.no_of_days}</Text>
                </View>

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>selected Pick Up Time</Text>
                  <Text style={styles.pickUpTimeText}>{route.params.selectedTime}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.billingRow}>
                  <Text style={styles.totalText}>To Pay</Text>
                  <Text style={styles.totalText}>{total + 95}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable style={styles.proceedButton}>
          <View>
            <Text style={styles.proceedButtonText}>
              {cart.length} items | Total: ${total}
            </Text>
            <Text style={styles.extraChargesText}>Extra charges might apply</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Checkout")}
            style={styles.placeOrderButton}
          >
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cartContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 10,
    padding: 14,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemName: {
    width: 100,
    fontSize: 16,
    fontWeight: "500",
  },
  quantityContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FF2C2C",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 19,
    color: "#FF2C2C",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  itemPrice: {
    width: 100,
    fontSize: 16,
    fontWeight: "500",
    left: "20%",
  },
  billingTitle: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: "bold",
  },
  billingContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 10,
    marginTop: 15,
  },
  billingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  billingText: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray",
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
  pickUpTimeText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#088F8F",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  proceedButton: {
    backgroundColor: "rgba(255, 44, 44, 0.9)",
    padding: 15,
    marginBottom: 10,
    marginTop: "auto",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 7,
  },
  proceedButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  extraChargesText: {
    color: "#fff",
  },
  placeOrderButton: {
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
  },
  placeOrderButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default CartScreen;
