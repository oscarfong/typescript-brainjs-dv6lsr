// Try LTSM directed graph

// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs

// Import stylesheets
import './style.css';

import NeuralNetworkItem, {NIList, NINetwork} from './NeuralNetworkData';


import retro1, {retro2} from './retro1';


import * as R from 'ramda';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var nn1 = new NeuralNetworkItem("bagsToWash", 0.7);

console.log( nn1.toJSON());


// test NeuralPredicate

var nnet = new NINetwork();

///
var np1 = nnet.addAsKeysVals( ["bagsToWashHome", "bagsInStore", "bagsUnused"] , [0.6,0.4, 0.31] );

//nnet.addAsKeysVals( ["bagsToWashHome", "bagsInStore", "bagsUnused"] , [1.1, 0.94, 0.131] );
nnet.addAsKeysVals( ["bagsToWashHome", "bagsInStore", "bagsUnused"] , [0.0,0.0, 0.00] );
nnet.addAsKeysVals( ["bagsToWashHome", "bagsInStore", "bagsUnused"] , [1.0,1.0, 1.00] );


console.log(np1.toJSONStr());

////////////////// Test splitting value with ramda only 190925 
console.log("pt 001 ramda");

const onlyV = np1.onlyVals();
console.log( onlyV );
console.log( R.take(2,onlyV) );
console.log( R.drop(2,onlyV) );
// Test splitting NIList with ramda only 190925 
console.log( R.take(2,np1.npList) );
console.log( R.drop(2,np1.npList) );


console.log("pt 002");

const netTrained = nnet.trainNet(2);
console.log("pt 002-1");
console.log (netTrained);
const ans003 =  netTrained.run( [0.6,0.4]);
console.log("pt 002-2 / Answer");
console.log( ans003.toString());
console.log( ans003);
//R.apply(console.log, ans003);

console.log("pt 003");
/////////////

console.log(np1.onlyKeys());
console.log(np1.splitN(2));
console.log(np1.headListSplitN(1));

console.log(np1.tailListSplitN(1));




// testing retro1
var r1 = new retro1(netTrained);
var retroAns=  r1.findInput( [{output: [0.11]}] );

console.log("pt 004");
console.log( retroAns);
console.log( retroAns[0]);
