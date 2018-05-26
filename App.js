import React from 'react';
import { StyleSheet, Text, SafeAreaView,View , Slider, Image} from 'react-native';
// import { Slider } from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true,
                  value: 2
                  };

  }

  render() {


    return (

      <SafeAreaView style={{flex: 4, backgroundColor: '#abc'}}>

      <View style={styles.container}>
            
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>


        
      </View>


      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', width: 300}}>
        <Slider
          maximumValue={5}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>

      </View>


      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
