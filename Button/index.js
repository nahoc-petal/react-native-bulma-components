/**
 * Button Component
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { ActivityIndicator, Text, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import styles from './styles'

export class Button extends Component {
  render() {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
    const {
      size,
      fullWidth,
      color,
      textColor,
      loading,
      inverted,
      disabled,
      text,
      rounded,
      onPress,
      children,
    } = this.props

    return (
      <TouchableComponent
        style={[
          styles.button, 
          color ? styles[color] : null,
          rounded ? styles.rounded : null,
          fullWidth ? styles.fullWidth : null,
          disabled ? styles.disabled : null,
          inverted ? styles.inverted : null,
          loading ? styles.loading : null,
        ]}
        onPress={onPress}
        disabled={disabled || loading}
      >
        { 
          loading ? 
            <ActivityIndicator 
              color={textColor} 
              size={size === 'small' || size === 'large' ? size : null}
            /> 
          :
            <Text
              style={[
                text ? styles.text : null,
                size ? styles[size] : null,
                textColor ? styles[textColor] : null,
                disabled ? styles.textDisabled : null,
              ]}
            >
              {text || children}
            </Text>
        }
      </TouchableComponent>
    )
  }
}

export default Button
