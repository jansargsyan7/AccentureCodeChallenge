import React, { useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Animated, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import AnimatedHeader from '../containers/AnimatedHeader';

import { PRODUCT_DETAILS_ENDPOINT } from '../constants';
import PriceBtn from '../components/PriceBtn';
import useFetch from '../hooks/useFetch';
import PropTypes from 'prop-types';

const Product = ({ navigation, route }) => {
  const isLoading = useSelector((state) => state.utils.isLoading);

  const { apiData: product, error } = useFetch(PRODUCT_DETAILS_ENDPOINT + route.params?.id);
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles(product).container}>
      <AnimatedHeader
        animatedValue={offset}
        back
        navigation={navigation}
        bgImage={product.image1 ? product.image1 : product.image2}
      >
        {route.params?.productTitle}
      </AnimatedHeader>

      <ScrollView
        style={{ flex: 1, backgroundColor: product.backgroundColor }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 220,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], {
          useNativeDriver: false,
        })}
      >
        {isLoading && <Spinner isLoading={isLoading} />}
        {!isLoading && (
          <View>
            <View style={styles(product).titleWrapper}>
              <View>
                <Text style={styles(product).productTitle}>{product.title}</Text>
              </View>
              <View>
                {product.ukOnly && (
                  <Image
                    style={styles(product).ukFlag}
                    source={require('../assets/uk.png')}
                    alt={product.title}
                  />
                )}
              </View>
            </View>
            <Text style={styles(product).description}>{product.description}</Text>
            <PriceBtn product={product} price={product.price} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = (product) =>
  StyleSheet.create({
    container: {
      backgroundColor: product.backgroundColor,
      flex: 1,
      width: '100%',
    },
    titleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
    productTitle: {
      fontFamily: 'Roboto-Regular',
      fontSize: 40,
      color: product.textColor,
    },
    description: {
      marginTop: 10,
      fontSize: 28,
      color: product.textColor,
    },
    ukFlag: {
      width: 35,
      height: 20,
      borderRadius: 5,
    },
  });

Product.propTypes = {
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
  route: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    params: PropTypes.shape({
      productTitle: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
