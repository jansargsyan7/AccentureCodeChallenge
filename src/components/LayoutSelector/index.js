import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const LayoutSelector = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#32a852' }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LayoutSelector;
