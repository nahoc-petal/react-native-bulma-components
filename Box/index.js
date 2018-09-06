/**
 * Box Component
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

export class Box extends Component {
  render() {
    const {
      children,
    } = this.props

    return (
      <View
        style={[
          styles.box,
        ]}
      >
        {children}
      </View>
    )
  }
}

export default Box
