import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const ProductEntity = ({ navigation, product }) => {
  return (
    <TouchableOpacity
      key={product.id}
      onPress={() => navigation.navigate('Product', { id: product.id })}
      style={styles.container}
    >
      <Text>{product.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9c9c9',
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 30,
  },
});

export default ProductEntity;
