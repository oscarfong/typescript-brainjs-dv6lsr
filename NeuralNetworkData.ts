// NeuralNetworkData.ts

import React, { Component } from 'react';
import * as R from 'ramda';
//import {ResourceBase} from './ClsTest1'

// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs


import brain from 'brain.js'


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

 onlyKeys() {  // keys or labelName
	 const valfn = x => x.labelName;
	 
	 return R.map( valfn, this.npList);

 }


////////////////
 
  train() {
	  console.log("* Deprecated: NIList.train()");
	  return {};
  }



 
 splitN(NumForList1) {
	 /// can be replace with Ramda take() and drop()
	 var headList=[];
	 var tailList=[];
	 
	 var ii =0;
	 const len1 = (this.npList.length);
   console.log(len1);

	 
	 while (ii <= len1-1 )
	 {
		 
		 if (ii <= NumForList1-1) {
			 headList.push(this.npList[ii]);
			 
		 }
		 else {
			 tailList.push(this.npList[ii]);
		 }
     ii++;
		 
		 
	 }
	 
	 return ({'headList':headList, 'tailList':tailList});
	 
 }

 headListSplitN( pos){
   return this.splitN(pos)['headList'];
 }


 tailListSplitN( pos){
   return this.splitN(pos)['tailList'];
 }




 onlyVals() {
	 const valfn = x => x.val01;
	 
	 return R.map( valfn, this.npList);
	 
	 
 }


}

///////////////
export class NNQuery extends NIList {
    
}	
/////



export class  NNTraininData{
	InputData : NIList;
	OutputData: NIList;
    
}	


///////////////
export class NINetwork{
    NDataRows : NIList[];	
  
    constructor() {
      this.NDataRows =[];
    }

    add(n:NIList){
      this.NDataRows.push(n);
    }

    trainNet(numOfInput) {
   
   	 // numOfInput states how many items of NDataRows from head are input and the rest on the right side are output
   
        // provide optional config object (or undefined). Defaults shown.
        const config = {
            binaryThresh: 0.5,
            hiddenLayers: [2],     // array of ints for the sizes of the hidden layers in the network
            activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
            leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
        };
   
   
   	 var net = new brain.NeuralNetwork(config);
   	 //R.call( x => net.train( [ {input: R.take( numOfInput, x) , output: R.drop(numOfInput, x) } ] ) ,     this.NDataRows) ;
   	 
   	 this.NDataRows.forEach( function(x) {
   		 net.train( [ {input: R.take( numOfInput, x.onlyVals()) , output: R.drop(numOfInput, x.onlyVals()) } ] );
   	 });
   
   
      console.log("pt101");
      //R.call(x => console.log( [ {input: R.take( numOfInput, x) , output: R.drop(numOfInput, x) } ] ) ,     this.NDataRows );
   	 return net;
   
    }
    
  ///////////
  addAsKeysVals(pKeys:string[], pVals:number[]) {
    var np1 = new NIList();
	  
	  var zipKV = R.zip(pKeys, pVals);
	  
	  zipKV.forEach( function(x) {
		  np1.add(  new NeuralNetworkItem(x[0], x[1]));
	  });

	  this.add(np1);
    return (np1);

  }



	
	
}



////
console.log( "NeuralNetworkItem...");

export default NeuralNetworkItem;
