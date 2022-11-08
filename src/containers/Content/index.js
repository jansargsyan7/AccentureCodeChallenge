import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
  return (
    <View accessibilityLabel="Content" style={styles.content}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
});

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
