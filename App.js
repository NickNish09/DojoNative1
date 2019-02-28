
import React, {Component} from 'react';
import {Platform,Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import InputField from './src/components/InputField'
import Botao from './src/components/Botao'
export default class App extends Component{
  state = {
    text: 'oi',
  };

  makePost(email){
    this.setState({text: email})
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={require('./src/screens/fundo-elegante-de-gradiente_1340-3947.jpg')}
        />
        <Text style={styles.welcome}>dinnerjump</Text>
        <Text style={styles.instructions}>comidas gostosas</Text>
        <InputField label="email"/>
        <InputField label="senha" isPwd={true} changed={(event) => this.makePost(event)}/>
        <Text>{this.state.text}</Text>
        <TouchableOpacity
          style={styles.button}
        >
          <Text> login </Text>
        </TouchableOpacity>
          <Button color="#AAA" title="Esqueci uma senha"/>
        <View style={{position: "absolute", bottom: 20}}>
          <Button title="Cria uma conta" color="red"/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
  button: {
    width: 175,
    alignItems: "center",
    padding: 10,
    margin: 15,
    borderRadius: 100,
    backgroundColor: "#f44242",
    height: 44,
    color: "#fff",
  },
});
