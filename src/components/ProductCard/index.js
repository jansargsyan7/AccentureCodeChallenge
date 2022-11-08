import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

const ProductCard = ({ navigation, product, index }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      accessible
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity
        accessibilityLabel={product.title}
        key={product.id}
        onPress={() =>
          navigation.navigate('Product', { productTitle: product.title, id: product.id })
        }
        style={styles.item}
      >
        <Image
          source={{ uri: product.image1 ? product.image1 : product.image2 }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#c9c9c9',
    borderRadius: 10,
    width: Dimensions.get('window').width > 600 ? '49%' : '100%',
    overflow: 'hidden',
  },
  item: {
    padding: 0,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: Dimensions.get('window').width > 600 ? 100 : 150,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

ProductCard.propTypes = {
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
  }),
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    binomialName: PropTypes.string,
    description: PropTypes.string,
    ukOnly: PropTypes.bool,
    image1: PropTypes.string,
    image2: PropTypes.string,
    accentColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    order: PropTypes.string,
    price: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default ProductCard;
