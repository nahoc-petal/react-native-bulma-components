/**
 * Notification Component
 *
 * based on https://bulma.io/documentation/elements/notification/
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, Text} from 'react-native'
import styles from './styles'

export class Notification extends Component {
  render() {
    const {
      size,
      color,
      textColor,
      text,
      children,
    } = this.props

    return (
      <View
        style={[
          styles.notification, 
          color ? styles[color] : null,
        ]}
      >
        <Text
          style={[
            text ? styles.text : null,
            size ? styles[size] : null,
            textColor ? styles[textColor] : null,
          ]}
        >
          {text || children}
        </Text>
      </View>
    )
  }
}

export default Notification
