import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingToggle } from '../redux/slices/utilsSlice';
import { loadProducts } from '../redux/slices/productsSlice';
import ProductEntity from '../components/ProductEntity';

import { PRODUCTS_LIST_ENDPOINT } from '../constants';

const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetch(PRODUCTS_LIST_ENDPOINT)
        .then((response) => response.json())
        .then((json) => {
          const productsRaw = json;
          productsRaw.sort((a, b) => (a.order > b.order ? 1 : -1));
          dispatch(loadProducts(productsRaw));
        })
        .catch((error) => console.error(error))
        .finally(() => dispatch(isLoadingToggle()));
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Spinner isLoading={isLoading} />}
      {!isLoading &&
        products?.map((product) => (
          <ProductEntity navigation={navigation} key={product.id} product={product} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    backgroundColor: '#c9c9c9',
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 30,
  },
});

export default HomeScreen;
