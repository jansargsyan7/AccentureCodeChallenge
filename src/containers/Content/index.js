import React from 'react';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
});

export default Content;
