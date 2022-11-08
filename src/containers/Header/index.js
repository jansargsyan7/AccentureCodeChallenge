import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ children, navigation, back, next }) => {
  return (
    <View style={styles.header} accessibilityLabel="Header">
      <View style={styles.leftSide} testID={'backView'}>
        {back && (
          <TouchableOpacity
            accessibilityLabel="Go Back"
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}
          >
            <Text>{'<<'} Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.rightSide}>
        {next && (
          <TouchableOpacity
            accessibilityLabel="Go to Next page"
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}
          >
            <Text>Next {'>>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  back: {
    backgroundColor: 'none',
    color: 'black',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
  },
  leftSide: {
    textAlign: 'left',
    width: '20%',
  },
  rightSide: {
    textAlign: 'right',
    width: '20%',
  },
});

Header.propTypes = {
  children: PropTypes.node.isRequired,
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
  back: PropTypes.bool,
  next: PropTypes.bool,
};

export default Header;
