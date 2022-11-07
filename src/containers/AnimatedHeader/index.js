import React from 'react';
import { Animated, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({ animatedValue, bgImage, navigation }) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 100],
    extrapolate: 'clamp',
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.back}
      >
        <Text>{'<<'} Back</Text>
      </TouchableOpacity>
      <Animated.Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
        }}
        source={{
          uri: bgImage,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#c9c9c9',
    zIndex: 11,
    border: '1px solid black',
  },
});

AnimatedHeader.propTypes = {
  bgImage: PropTypes.string,
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
};
export default AnimatedHeader;
