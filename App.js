import React from 'react';
import { StyleSheet, Text, SafeAreaView,View , Slider, Image, Button} from 'react-native';
// import { Slider } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';




class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true,
                  value: 2
                  };

  }

  render() {


    return (

      <SafeAreaView style={{flex: 1, backgroundColor: '#abc'}}>

      <View style={styles.container}>
            
        <Text style={styles.question}>How're you feeling?</Text>
        
      </View>

      <View style={{flex:1, alignItems: 'center'}}>
      <View style={styles.slider}>
        <Slider
          maximumValue={5}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>

      </View>

        <Button
          title="Done"
          onPress={() => this.props.navigation.navigate('Details')}
        />
   

      </View>




      </SafeAreaView>

    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
                <Button
          title="Done"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
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
  slider: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 300,
  }
});
