import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingToggle } from '../redux/slices/utilsSlice';
import { loadProducts } from '../redux/slices/productsSlice';
import ProductCard from '../components/ProductCard';
import Content from '../containers/Content';
import Header from '../containers/Header';
import ProductGrid from '../containers/ProductGrid';
import useFetch from '../hooks/useFetch';

import HorizontalCarousel from '../containers/HorizontalCarousel';

import LayoutSelector from '../components/LayoutSelector';
import { PRODUCTS_LIST_ENDPOINT } from '../constants';

const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);
  const products = useSelector((state) => state.products);

  const [gridSelector, setGridSelector] = useState(true);
  const toggleSwitch = () => setGridSelector((previousState) => !previousState);

  const { apiData, error } = useFetch(PRODUCTS_LIST_ENDPOINT);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLoading);
    if (apiData) {
      dispatch(loadProducts(apiData));
    } else if (error) {
      console.error(error);
    }
  }, [apiData, error]);

  return (
    <View style={styles.container}>
      <Header>Seed Shop 🌱</Header>
      <Content>
        <View style={styles.selector}>
          <View>
            <Text>Show carousel</Text>
          </View>
          <View>
            <LayoutSelector isEnabled={gridSelector} toggleSwitch={toggleSwitch} />
          </View>
          <View>
            <Text>Show cards</Text>
          </View>
        </View>
        {isLoading && <Spinner isLoading={isLoading} />}
        {!isLoading && gridSelector && <ProductGrid products={products} navigation={navigation} />}
        {!isLoading && !gridSelector && (
          <HorizontalCarousel navigation={navigation} products={products} />
        )}

        <HorizontalCarousel />
      </Content>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    fontSize: 30,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'flex-start',
  },
  product: {
    backgroundColor: '#c9c9c9',
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 30,
  },
  selector: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

export default HomeScreen;
