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

export class NeuralPredicate {
  npList : NeuralNetworkItem[];
  
  constructor() {
    this.npList =[];
  }

  add( ni: NeuralNetworkItem) {
    this.npList.push( ni) ;
  }


  toJSON() {
	  var xx = [] ;
    var item1:any;
	  for (item1 in this.npList) {
		  xx.push( item.toJSON());
	  }
	  return xx;
  }

  toJSONStr() {
    return JSON.stringify(( this.toJSON()));
  }


}




console.log( "NeuralNetworkItem...");

export default NeuralNetworkItem;
