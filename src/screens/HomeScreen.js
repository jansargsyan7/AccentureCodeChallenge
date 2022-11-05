import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LogBox } from 'react-native';
import { API_ENDPOINT } from '../constants';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingToggle } from '../redux/utilsSlice';
import { loadProducts } from '../redux/productsSlice';

const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  LogBox.ignoreLogs([
    "No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.",
  ]);

  useEffect(() => {
    setTimeout(() => {
      fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((json) => {
          const productsRaw = json;
          productsRaw.sort((a, b) => (a.order > b.order ? 1 : -1));
          dispatch(loadProducts(productsRaw));
        })
        .catch((error) => console.error(error))
        .finally(() => dispatch(isLoadingToggle()));
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Spinner isLoading={isLoading} />}
      {!isLoading &&
        products?.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.product}
            onPress={() => navigation.navigate('Product', { id: product.id })}
          >
            <Text key={product.id}>{product.title}</Text>
          </TouchableOpacity>
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
