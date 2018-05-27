import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export class SmallButton extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.smallButton}>
          <Text style={styles.smallText}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50,         // Rounded border
    borderWidth: 2,           // 2 point border widht
    borderColor: '#FFFFFF',   // White colored border
    paddingHorizontal: 50,    // Horizontal padding
    paddingVertical: 10,      // Vertical padding
  },
  // Button text
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },

  // Button container
  smallButton: {
    borderRadius: 15,         // Rounded border
    borderWidth: 2,           // 2 point border widht
    borderColor: '#FFFFFF',   // White colored border
    paddingHorizontal: 10,    // Horizontal padding
    paddingVertical: 10,      // Vertical padding
    margin: 2,
  },
  // Button text
  smallText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },

});