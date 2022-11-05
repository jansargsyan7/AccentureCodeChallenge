import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', { id: '111' })}>
      <Text>Go to profile</Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
