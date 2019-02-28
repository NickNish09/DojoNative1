import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class InputField extends Component{
        render(){
                return(
                  <View>
                          <Text>{this.props.label}</Text>
                          <TextInput
                            style={{
                                    borderColor: '#888',
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    height: 44,
                                    width: 300,
                                    fontSize: 18,
                                    padding: 10
                            }}
                            secureTextEntry={this.props.isPwd}
                            onChangeText={(text) => this.props.changed(text)}
                          />
                  </View>
                )
        }
}
