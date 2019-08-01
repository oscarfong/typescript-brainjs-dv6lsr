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

export class NIList {    // Neural Item List
  npList : NeuralNetworkItem[];
  
  constructor() {
    this.npList =[];
  }

  add( ni: NeuralNetworkItem) {
    this.npList.push( ni) ;
  }


//  toJSON() {
//	  var xx = [] ;
//    //var item1;
//	  for (var item1 in this.npList) {
//		  xx.push( item1.toJSON());
//	  }
//	  return xx;
//  }

 toJSON() {
	  var xx = [] ;
      for(var i = 0; i < this.npList.length; i++) {
		  xx.push( this.npList[i].toJSON() );
	  }
	  return xx;
 }

  toJSONStr() {
    return JSON.stringify(( this.toJSON()));
  }


}




console.log( "NeuralNetworkItem...");

export default NeuralNetworkItem;
