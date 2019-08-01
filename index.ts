// pls ref: to react-ts-lodash-private-95fpq7-8cyqgs


// Import stylesheets
import './style.css';

import NeuralNetworkItem from './NeuralNetworkData';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var nn1 = new NeuralNetworkItem("bagsToWash", 0.7);

console.log( nn1.toJSON());