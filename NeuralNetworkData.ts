import React, { Component } from 'react';

//import {ResourceBase} from './ClsTest1'

// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs

class NeuralNetworkItem {
  labelName: string; 
  val01: number; // from 0 to 1
  

  constructor(ll:string, vv:number){
    //super();
    this.labelName = ll;
    this.val01 = vv;
    
  }

  
  toJSON() {
    return [this.labelName, this.val01];
  }


  toJSONStr() {
    return JSON.stringify(( this.toJSON()));
  }

}
////////////////

class NeuralPredicate {
  npList : NeuralNetworkItem[];
  
  constructor() {
    this.npList =[];
  }

  add( ni: NeuralNetworkItem) {
    this.npList.push( ni) ;
  }

  


}




console.log( "NeuralNetworkItem...");

export default NeuralNetworkItem;
