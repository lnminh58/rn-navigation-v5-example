import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  label: {
    fontSize: 17,
    color: '#dfe6e9',
    fontWeight: '700',
  },
});

const Button = ({
  text,
  containerStyle,
  textStyle,
  children,
  disabled,
  ...props
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[
      styles.container,
      {
        backgroundColor: disabled ? '#7bed9f' : '#2ed573',
      },
      containerStyle,
    ]}
    {...props}
  >
    {typeof children === 'string' ? (
      <Text style={[styles.label, textStyle]}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);

export default Button;
