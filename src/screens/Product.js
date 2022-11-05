import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Product = ({ navigation, route }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { id: '111' })}>
      <Text>Go to HomeScreen</Text>
    </TouchableOpacity>
  );
};

export default Product;
