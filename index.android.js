'use strict'

import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

class Blink extends Component {
  constructor (props) {
    super(props)
    this.state = { showText: true }

    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000)
  }

  render () {
    let display = this.state.showText ? this.props.text : ''
    return (
      <Text>{display}</Text>
    )
  }
}

class AsymLIFE extends Component {
  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <Blink text="Welcome to AsymLIFE!" />
      </View>
    )
  }
}

AppRegistry.registerComponent('AsymLIFE', () => AsymLIFE)
