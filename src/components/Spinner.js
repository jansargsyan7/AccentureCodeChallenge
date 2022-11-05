import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Animated, Easing, View } from 'react-native';

const Spinner = ({ isLoading }) => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

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
    <>
      {isLoading && (
        <View style={styles} alignItems="center" justifyContent="center">
          <Animated.View style={animatedStyle}>
            <Image style={styles.spinner} source={require('../assets/spinner.png')} />
          </Animated.View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  spinner: {
    width: 50,
    height: 50,
  },
});

export default Spinner;
