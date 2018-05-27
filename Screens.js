import React from 'react';
import Slider from 'react-native-slider';
import { StyleSheet, Text,View, TextInput, Image} from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

import { Button, SmallButton } from './Button';

import Swiper from './Swiper';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2,
                  sliderDragged: false,
                  };
  }

  static navigationOptions = {
    title: 'Record',
    header: null,
  };

  render() {
    return (
      <Swiper>
        <SafeAreaView style={{flex: 1, backgroundColor: '#1139a3'}}>
          <View style={[styles.container, {backgroundColor: '#1139a3', alignItems:'stretch'}]}>
            <Text style={styles.question}>How would you rate your mood?</Text>
          </View>
          <View style={{flex:1, alignItems: 'center'}}>
            <View style={styles.sliderContainer}>
              {this.state.sliderDragged &&
                <View style={[styles.sliderPopup,
                              {left: slider_width*(this.state.value/5) + 12 - popup_width/2}]}/>
              }
              <Slider
                maximumValue={5}
                value={this.state.value}
                onValueChange={(value) => this.setState({value})}
                onSlidingComplete={() => this.setState({slideDragged:true})}

                trackStyle={sliderStyles.track}
                thumbStyle={sliderStyles.thumb}
                minimumTrackTintColor='#9cb4f5'
                />
              <Text style={{color:"#ffffff", margin:10, width:50, fontSize:25, textAlign:'center', left: slider_width*(this.state.value/5)-20}}>
                  {+(Math.round(this.state.value + "e+1")  + "e-1")}</Text>
              
              {/*<Text style={{color:"#ffffff", margin:10}}>SliderDragged: {this.state.sliderDragged.toString()}</Text>*/}

            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView style={{flex: 1, backgroundColor: '#1444c2'}}>
          <View style={[styles.container, {backgroundColor: '#1444c2', alignItems:'stretch'}]}>
            <View style={{marginTop:5, marginBottom:10, backgroundColor: '#1444c2'}}>
              <Text style={styles.question}>What are you feeling?</Text>
            </View>
          </View>

          <View style={{flex:1, alignItems: 'center'}}>
            <View style={{flex:1, paddingLeft:20, alignItems:'center', flexDirection:'row', flexWrap:'wrap'}}>
               <SmallButton
                text="neutral"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton style={{paddingHorizontal: 0}}
                text="excited"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton
                text="content"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton
                text="exhausted"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton
                text="sick"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton
                text="sad"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
              <SmallButton
                text="angry"
                onPress={(slideDragged) => this.setState({slideDragged:true})}
              />
            </View>
            {/*<Text style={{color:"#ffffff", margin:10}}>
              SliderDragged: {this.state.sliderDragged.toString()}
            </Text>*/}
          </View>
        </SafeAreaView>


        <SafeAreaView style={{flex: 1, backgroundColor: '#1444c2'}}>
          <View style={[styles.container, {flex: 1, backgroundColor: '#1444c2', alignItems:'stretch'}]}>
            <View style={{marginTop:5, marginTop:'auto', backgroundColor: '#1444c2'}}>
              <Text style={styles.question}>[Question]?</Text>
            </View>
          </View>

          <View style={{flex:2}}>
            <TextInput
              style={styles.textInput}
              multiline = {true}
              placeholder="Answer..."
              onChangeText={(text) => this.setState({text})}
            />
            {/*<Text style={{color:"#ffffff", margin:10}}>
              SliderDragged: {this.state.sliderDragged.toString()}
            </Text>*/}
          </View>
        </SafeAreaView>


      </Swiper>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Record',
    header: null,
  };

  render() {
    return (

      <SafeAreaView style={{flex: 1, backgroundColor: '#1444c2'}}>
        <View style={{height: 200, backgroundColor: '#1444c2'}}>
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <View style={{flex:1, paddingLeft:20, alignItems:'center', flexDirection:'row', flexWrap:'wrap'}}>
          <SmallButton
              text="Done"
              onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
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
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const slider_width = 300
const popup_width = 60

const styles = StyleSheet.create({
  question: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#eeeeee',
    shadowOpacity: 0,
    margin:20,
    marginLeft:40
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
    width: slider_width,
  },

  sliderPopup: {
    backgroundColor:'#ffffff',
    width:popup_width,
    height:popup_width,
    borderRadius:5,
    marginBottom: 10
  },

  textInput: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#bbccf8',
    shadowOpacity: 0,
    marginHorizontal:20,
    marginLeft:40,
    marginBottom:100
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#cad7f9',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -5, height: 4},
    textShadowRadius: 10,
    margin:20,
    marginLeft:40
  }

});

const sliderStyles = StyleSheet.create({
  track: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5f86ee',
  },
  thumb: {
    width: 20,
    height: 40,
    borderRadius: 0,
    backgroundColor: '#9cb4f5',
  }
});