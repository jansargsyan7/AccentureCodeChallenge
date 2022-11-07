import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import ProductCard from '../../components/ProductCard';

const ProductGrid = ({ products, navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        width: Dimensions.get('window').width - 20,
        flexGrow: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      {products?.map((product) => (
        <ProductCard navigation={navigation} key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
export default ProductGrid;
