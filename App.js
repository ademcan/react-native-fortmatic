/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import Fortmatic from 'fortmatic';
const Web3 = require('web3');

// import Web3Webview from 'react-native-web3-webview';
import { WebView } from 'react-native-webview';

var GLOBALS = require('./globals');

type Props = {};


var WEBVIEW_REF = 'webview';


export default class App extends Component<Props> {

  constructor(props){
    super(props);
    // this.onWebViewMessage = this.onWebViewMessage.bind(this);
    // this.onShare = this.onShare.bind(this);
  }


  state={
    fmProvider : {}
  }


  connect() {
    const web3 = new Web3( this.state.fmProvider );
    web3.eth.getBlock('latest').then(console.log)
  }

  getMessage = (message) => {
    console.log( JSON.parse(message) )

    // Infura works
    // web3 = new Web3('https://mainnet.infura.io/');
    web3 = new Web3( JSON.parse(message) );

    web3.eth.getBlock(48, function(error, result){
      if(!error)
          console.log(JSON.stringify(result));
      else
          console.error(error);
   })
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={WEBVIEW_REF}
          style={{flex:1}}
          onMessage={(event) => { this.getMessage(event.nativeEvent.data) }}

          source={{ html: `
            <html>
              <head>
                <title>TEST webview</title>
                <script src="https://cdn.jsdelivr.net/npm/fortmatic@0.7.4/dist/fortmatic.js"></script>
                
                <script>
                  let fm = new Fortmatic('`+GLOBALS.fortmaticPkTest+`');
                  window.ReactNativeWebView.postMessage( JSON.stringify(fm.getProvider()) );
                </script>
              </head>
              <body>
                <h1>Testing Fortmatic on RN</h1>
              </body>
            </html>
          `}}
        />

      {/* <Button
        onPress={this.connect}
        title="Connect"
        color="#841584"
      /> */}
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
