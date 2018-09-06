/**
 * TagGroup Component
 *
 * based on https://bulma.io/documentation/elements/tag/
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

export class TagGroup extends Component {
  render() {
    const {
      children,
      gapless,
    } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { gapless }));
      
    return (
      <View
        style={[
          styles.tagGroup, 
        ]}
      >
        {childrenWithProps}
      </View>
    )
  }
}

export default TagGroup
