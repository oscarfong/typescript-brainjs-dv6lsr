import React, { Component } from 'react';

//import {ResourceBase} from './ClsTest1'

// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs

class NeuralNetworkItem {
  labelName: string; 
  val01: number; // from 0 to 1
  

  constructor(){
    //super();
    
  }

  toJSON() {
    return JSON.stringify(( [this.labelName, this.val01]))
  }

}
console.log( "NeuralNetworkItem...");

export default NeuralNetworkItem;
