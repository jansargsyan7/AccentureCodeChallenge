import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { API_ENDPOINT } from './src/constants';
import { LogBox } from 'react-native';

export default function App() {
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
          <Image style={styles.spinner} source={require('./src/assets/spinner.png')} />
        </Animated.View>
      )}
      {!isLoading &&
        products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.product}
            onPress={() => {
              alert('You tapped the button!');
            }}
          >
            <Text key={product.id}>{product.title}</Text>
          </TouchableOpacity>
        ))}
      <StatusBar style="auto" />
    </View>
  );
}

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
