/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Slider,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Student extends Component {
  constructor(props) {
      super(props);
      this.state = {
          age : 1,
          height : 120
      };
  }

  onTouch() {
    this.setState({height: this.state.height+1});
  }

  render() {
      return(
          <View>
              <Text>{this.props.name}</Text>
              <Text>{this.state.age}</Text>
              <TouchableOpacity onPress={() => {this.onTouch()}}>
                <Text>{this.state.height}</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text>{ this.props.name }</Text>
              <Slider style={{ width: 200, marginStart: 5, marginEnd: 5 }} />
              <View>
                <TextInput style={{ width: 50, height: 30, borderRadius: 5, borderColor: 'black', borderWidth: 1, padding: 5, textAlign: 'center' }} />
              </View>
          </View>
    );
  }
}

renderHeader = () => {
  return(
    <View style={}>
      <Text style={{ color:'black' }}>Color Picker</Text>
    </View>
  );
}

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      { this.renderHeader() }
      <View style={styles.container}>
        <View style={{ width: 300, height: 350, flexDirection:'column' }}>
          <View style={{ flex:1, marginBottom: 10 }}>
            <SliderItem name='R'/>
            <SliderItem name='G'/>
            <SliderItem name='B'/>
          </View>
          <View style={{ flex:1, backgroundColor: 'red', borderRadius: 7 }}>

          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: { 
    height: 40, 
    backgroundColor: 'gray', 
    alignItems: 'center', 
    justifyContent: 'center', 
    shadowColor: 'white', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.8, elevation: 10 
  },
  container: {
    flex: 1,
    backgroundColor: '#D7DBDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#D7DBDD',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red',
    height: 300,
    width: 400,
  },
  sectionView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
