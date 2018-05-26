import React from 'react';
import Slider from 'react-native-slider';
import { StyleSheet, Text, SafeAreaView,View , Image, Button} from 'react-native';
// import { Slider } from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true,
                  value: 2
                  };

  }

  onPressAdvance() {
    // Advance to next screen
  }

  render() {
    return (

      <SafeAreaView style={{flex: 1, backgroundColor: '#abc'}}>

        <View style={styles.container}>
              
          <Text style={styles.question}>How're you feeling?</Text>
          
        </View>

        <View style={{flex:1, alignItems: 'center'}}>
          <View style={styles.sliderContainer}>
            <Slider
              maximumValue={5}
              step={1}
              value={this.state.value}
              onValueChange={(value) => this.setState({value})} 
              
              trackStyle={sliderStyles.trackStyle}
              thumbStyle={sliderStyles.thumbStyle}
              minimumTrackTintColor='#d14ba6'
              />
            <Text>Value: {this.state.value}</Text>

          </View>
        </View>

        <View style={{flex:1, alignItems: 'center'}}>
          <Button
            onPress={this.onPressAdvance}
            title="Next Question"
            color="#000000"
            accessibilityLabel="Complete question and advance"
          />
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    backgroundColor: '#cde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 300,
  }
});

const sliderStyles = StyleSheet.create({
  track: {
    height: 20,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 20,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eb6e1b',
  }
});


