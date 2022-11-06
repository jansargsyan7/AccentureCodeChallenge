import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { isLoadingToggle } from '../redux/slices/utilsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PRODUCT_DETAILS_ENDPOINT } from '../constants';

const Product = ({ navigation, route }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(isLoadingToggle());

    setTimeout(() => {
      fetch(PRODUCT_DETAILS_ENDPOINT + route.params?.id)
        .then((response) => response.json())
        .then((json) => {
          setProduct(json);
          navigation.setOptions({ title: json.title });
        })
        .catch((error) => console.error(error))
        .finally(() => dispatch(isLoadingToggle()));
    }, 100);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Spinner isLoading={isLoading} />}
      {!isLoading && <Text>{product.title}</Text>}
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
});

export default Product;
