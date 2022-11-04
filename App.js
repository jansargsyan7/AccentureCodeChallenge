import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from './src/constants';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState({});

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

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading</Text>}
      {!isLoading &&
        products.map((product) => (
          <View style={styles.product}>
            <Text key={product.id}>{product.title}</Text>
          </View>
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
});
