/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  containerStyle,
  textStyle,
  icon,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#2196f3',
          borderRadius: 8,
          padding: 12,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        containerStyle,
      ]}
      disabled={disabled}
      onPress={onPress}>
      {icon && (
        <Icon name={icon} size={18} color="#fff" style={{marginRight: 8}} />
      )}
      <Text
        style={[{color: '#fff', fontWeight: 'bold', fontSize: 16}, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
