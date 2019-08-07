// Try LTSM directed graph

// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs

// Import stylesheets
import './style.css';

import NeuralNetworkItem, {NIList} from './NeuralNetworkData';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var nn1 = new NeuralNetworkItem("bagsToWash", 0.7);

console.log( nn1.toJSON());


// test NeuralPredicate

var np1 = new NIList();
np1.add(  new NeuralNetworkItem("bagsToWashHome", 0.6));
np1.add(  new NeuralNetworkItem("bagsInStore", 0.4));
np1.add(  new NeuralNetworkItem("bagsUnused", 0.31));

console.log(np1.toJSONStr());