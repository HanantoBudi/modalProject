/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state={
      showMe:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.showMe}
        onRequestClose={()=>console.warn("This is a close request")}>
          <View style={styles.modalView}>
            <Text>Hey. Modal is now open</Text>
          </View>
          <TouchableOpacity
          onPress={()=>{
            this.setState({
              showMe:false
            })
          }}>
            <Text style={styles.closeText}>Close Modal</Text>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity onPress={()=>{
            this.setState({
              showMe:true
            })
          }}>
          <Text style={styles.openText}>Open Modal</Text>
        </TouchableOpacity>
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
  modalView: {
    backgroundColor: '#aaa',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeText: {
    backgroundColor: '#333',
    color: "#bbb",
    padding: 5,
    margin: 20
  },
  openText: {
    backgroundColor: '#333',
    color: "#bbb",
    padding: 5,
    margin: 20
  },
});
