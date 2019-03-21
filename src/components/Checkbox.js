import React from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../styles/colors';
import checkmark from '../assets/checkmark.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    borderColor: colors.grey,
    borderRadius: 3,
    borderWidth: width * 0.002,
    height: width * 0.05,
    justifyContent: 'center',
    width: width * 0.05,
  },
});

const Checkbox = (props) => {
  const { handlePress, checked } = props;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.box}>
        {checked && <Image source={checkmark} />}
      </View>
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  handlePress: PropTypes.func,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  handlePress: () => null,
  checked: false,
};

export default Checkbox;
