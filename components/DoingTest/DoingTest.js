import React, { Component } from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Alert } from 'react-native';

export default class DoingTest extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgQuestion}>
          <Text style={styles.question}>1. Here are some related questions that you may be asked during a job interview that will require some thought to answer. Consider how you'd respond so you're as prepared as possible to answer the hiring manager's questions.What are your goals for the future?
          </Text>
        </View>
        <View style={styles.bgAnswer}>
          <TouchableHighlight style={styles.bgItemAnswer} onPress={this._onPressButton} underlayColor="white">
            <Text style={styles.buttonText}>A. this is letter A</Text>
          </TouchableHighlight>
        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({

  container :{
    flex:1,
    backgroundColor:'white',
    marginTop:50,
  },
  question: {
    color: 'black',
    //fontWeight: 'bold',
    fontSize: 16,
  },
  bgQuestion:{
    padding:16,
    backgroundColor:'#F6F6F6',
    alignItems:'left',
    marginBottom:12
  },
  buttonText: {
    color: 'blue'
  },
  bgItemAnswer:{
    marginTop:4,
    padding:16,
    backgroundColor:'#F6F6F6',

  },
  bgAnswer:{
   // padding:16,
    marginTop:20,
    backgroundColor:'#F6F6F6',
    alignItems:'left'
  }

});
