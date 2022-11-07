import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Header = ({ children, navigation, back, next }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        {back && (
          <TouchableOpacity
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

export default Header;
