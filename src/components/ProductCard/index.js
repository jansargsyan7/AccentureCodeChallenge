import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions } from 'react-native';

const ProductCard = ({ navigation, product }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={product.id}
        onPress={() =>
          navigation.navigate('Product', { productTitle: product.title, id: product.id })
        }
        style={styles.item}
      >
        <Image
          source={{ uri: product.image1 ? product.image1 : product.image2 }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#c9c9c9',
    borderRadius: 10,
    width: Dimensions.get('window').width > 600 ? '49%' : '100%',
    overflow: 'hidden',
  },
  item: {
    padding: 0,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: Dimensions.get('window').width > 600 ? 100 : 150,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default ProductCard;
