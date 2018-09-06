/**
 * Content Component
 *
 * based on https://bulma.io/documentation/elements/content/
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

export class Content extends Component {
  render() {
    const {
      children,
    } = this.props

    return (
      <View
        style={[
          styles.content,
        ]}
      >
        {children}
      </View>
    )
  }
}

export default Content
