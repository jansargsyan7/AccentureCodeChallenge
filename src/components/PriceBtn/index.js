import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PriceBtn = ({ product, price }) => {
  return (
    <TouchableOpacity
      style={styles(product).price}
      onPress={() => {
        alert('Purchased');
      }}
    >
      <Text style={styles(product).priceText}>Buy for £{price}</Text>
    </TouchableOpacity>
  );
};

const styles = (product) =>
  StyleSheet.create({
    price: {
      backgroundColor: product.accentColor,
      borderRadius: 15,
      padding: 20,
      fontSize: 15,
      display: 'flex',
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
  });

export default PriceBtn;
