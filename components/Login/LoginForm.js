import React, { Component } from 'react';
import {StyleSheet,View,TextInput, TouchableOpacity,Text} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TextInput
        placeholder="Username"
        onSubmitEditing={() => this.passwordInput.focus()}
        returnKeyType="next" placeholderTextColor="rgba(255,255,255,0.7)"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}/>

        <TextInput
        placeholder="Password"
        ref={(input) => this.passwordInput = input}
        returnKeyType="go"
        secureTextEntry
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    padding :20

  },
  input : {
    height:40,
    backgroundColor:'rgba(255,255,255,0.7)',
    marginBottom:10,
    color:'#FFF',
    paddingHorizontal:10
  },

  buttonContainer :{
    backgroundColor:'#64b5f6',
    paddingVertical:15

  },
  buttonText:{
    textAlign :'center',
    color: '#e3f2fd',
    fontWeight:'700'
  }
});
