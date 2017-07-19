import React, { Component } from 'react';
import { StyleSheet, Alert, TouchableOpacity, View, Text, Image } from 'react-native';

export default class QuizType extends Component {
   _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.bg}>
          <Text style={styles.title}>Choose what type of quiz that you want to test.</Text>
          <View style={styles.rowItem}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Image
                   source={{ uri: 'https://www.worldcare.co.nz/images/logo-home.png'}}
                   style={styles.btnItem}
                 />
              </TouchableOpacity>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Image
                   source={{ uri: 'https://maxbuttons.com/wp-content/themes/maxbuttons-theme/images/icons/basic-buttons-pack.png'}}
                   style={styles.btnItem}
                 />
              </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity onPress={this._onPressButton}>
               <Image
                 source={{ uri: 'http://buildyouronlinestore.weebly.com/uploads/5/9/1/0/59109131/607705132.png?198'}}
                 style={styles.btnItem}
               />
            </TouchableOpacity>
             <TouchableOpacity onPress={this._onPressButton}>
               <Image
                 source={{ uri: 'https://und.edu/provost/exceptional-und/_files/images/web-experience.png'}}
                 style={styles.btnItem}
               />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>StartTest</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  title:{
    color:'powderblue',
    width:200,
    margin: 20,
   // fontWeight: 'bold',
    fontSize: 16

  },

  rowItem:{
    flexDirection: 'row'
  },

  bg :{
    backgroundColor:'steelblue',
    flex:1,
    padding: 16,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  btnItem :{
    margin:16,
    width: 90,
    height: 90,
    //backgroundColor: 'skyblue'
  },
  button: {
    marginTop: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
