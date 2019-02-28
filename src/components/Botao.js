import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

module.exports = ({label, color}) => (

    <TouchableOpacity

      style={{
          backgroundColor:color,
        height: 44,
        width: 186,
        fontSize: 18,
        padding: 10,
          margin:10,
          borderRadius:100,
          alignItems:"center",
          justifyContent: 'center'

      }}
    >
        <Text>
            {label}
        </Text>

    </TouchableOpacity>

);
