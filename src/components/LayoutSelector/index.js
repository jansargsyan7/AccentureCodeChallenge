import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LayoutSelector = ({ isEnabled, toggleSwitch }) => {
  return (
    <View>
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
LayoutSelector.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};
export default LayoutSelector;
