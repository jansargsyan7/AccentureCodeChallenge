import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PriceBtn = ({ product, price }) => {
  const priceInt = parseInt(price);
  return (
    <>
      {priceInt > 0 && (
        <TouchableOpacity
          style={styles(product).price}
          onPress={() => {
            alert('Purchased');
          }}
        >
          <Text style={styles(product).priceText}>Buy for £{price}</Text>
        </TouchableOpacity>
      )}
      {(priceInt == 0 || price == undefined) && (
        <View style={styles(product).priceUnavailable}>
          <Text style={styles(product).priceTextUnavailable}>UNAVAILABLE</Text>
        </View>
      )}
    </>
  );
};

const styles = (product) =>
  StyleSheet.create({
    price: {
      backgroundColor: product.accentColor,
      borderRadius: 15,
      padding: 20,
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    priceUnavailable: {
      backgroundColor: 'grey',
      borderRadius: 15,
      padding: 20,
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    priceText: {
      fontSize: 20,
      textTransform: 'uppercase',
      color: product.textColor,
      fontWeight: 'bold',
    },
    priceTextUnavailable: {
      fontSize: 20,
      textTransform: 'uppercase',
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default PriceBtn;
