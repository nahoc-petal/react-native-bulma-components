/**
 * Tag Component
 *
 * based on https://bulma.io/documentation/elements/tag/
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, Text} from 'react-native'
import styles from './styles'

export class Tag extends Component {
  render() {
    const {
      size,
      color,
      textColor,
      text,
      rounded,
      children,
      gapless
    } = this.props

    return (
      <View
        style={[
          styles.tag, 
          color ? styles[color] : null,
          rounded ? styles.rounded : null,
          gapless ? null : styles.gap,
        ]}
      >
        <Text
          style={[
            text ? styles.text : null,
            size ? styles[size] : styles['normal'],
            textColor ? styles[textColor] : null,
          ]}
        >
          {text || children}
        </Text>
      </View>
    )
  }
}

export default Tag
