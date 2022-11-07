import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

import { useNavigation } from '@react-navigation/native';

const CarouselCardItem = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product', { productTitle: item.title, id: item.id })}
      style={styles.container}
      key={index}
    >
      <Image source={{ uri: item.image1 ? item.image1 : item.image2 }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.binomialName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 25,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 200,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
