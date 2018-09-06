/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from './Button'
import {Box} from './Box'
import {Tag} from './Tag/Tag'
import {TagGroup} from './Tag/TagGroup'
import {Notification} from './Notification'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Notification>        <Text style={styles.welcome}>Welcome to React Native!</Text></Notification>

        <Button 
          size='large'
          text={'My button lol'}
          color={'primary'}
          textColor='white'
          ></Button>

          <TagGroup>
          <Tag 
          color="primary"
          textColor="white"
          text="allo allo"
          ></Tag>
                    <Tag 
          color="primary"
          textColor="white"
          text="allo allo"
          ></Tag>
                    <Tag 
          color="primary"
          textColor="white"
          text="allo allo"
          ></Tag>
          </TagGroup>
        <Box>

        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        </Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
