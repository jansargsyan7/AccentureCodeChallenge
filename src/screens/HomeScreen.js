import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { LogBox } from 'react-native';
import { API_ENDPOINT } from '../constants';

const HomeScreen = ({ navigation }) => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState({});

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
          setProducts(productsRaw);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(products[0]);
  }, [products]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start(() => {
      rotateAnimation.setValue(0);
    });
  }, []);

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <Animated.View style={animatedStyle}>
          <Image style={styles.spinner} source={require('../assets/spinner.png')} />
        </Animated.View>
      )}
      {!isLoading &&
        products.map((product) => (
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

// <TouchableOpacity onPress={() => navigation.navigate('Product', { id: '111' })}>
//   <Text>Go to profile</Text>
// </TouchableOpacity>

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
  spinner: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
