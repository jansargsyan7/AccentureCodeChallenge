import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Spinner from '../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../redux/slices/productsSlice';
import Content from '../containers/Content';
import Header from '../containers/Header';
import ProductGrid from '../containers/ProductGrid';
import useFetch from '../hooks/useFetch';
import HorizontalCarousel from '../containers/HorizontalCarousel';
import LayoutSelector from '../components/LayoutSelector';
import PropTypes from 'prop-types';

import { PRODUCTS_LIST_ENDPOINT } from '../constants';

const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);
  const products = useSelector((state) => state.products);

  const [gridSelector, setGridSelector] = useState(false);
  const toggleSwitch = () => setGridSelector((previousState) => !previousState);

  const { apiData, error } = useFetch(PRODUCTS_LIST_ENDPOINT);

  const dispatch = useDispatch();

  useEffect(() => {
    if (apiData.length > 0) {
      apiData.sort((a, b) => (a.order > b.order ? 1 : -1));
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
  content: {
    marginTop: 30,
  },
});

HomeScreen.propTypes = {
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

export default HomeScreen;
