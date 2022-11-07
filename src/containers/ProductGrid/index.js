import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import ProductCard from '../../components/ProductCard';
import PropTypes from 'prop-types';

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
      {products?.map((product, index) => (
        <ProductCard index={index} navigation={navigation} key={product.id} product={product} />
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

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      binomialName: PropTypes.string,
      description: PropTypes.string,
      ukOnly: PropTypes.bool,
      image1: PropTypes.string,
      image2: PropTypes.string,
      accentColor: PropTypes.string,
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string,
      order: PropTypes.string,
    })
  ),
  navigation: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
    canGoBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired,
    getParent: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    isFocused: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    removeListener: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductGrid;
