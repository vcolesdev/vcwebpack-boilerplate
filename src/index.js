import App from "./App"
import { HelloWorld } from "./assets/scripts/HelloWorld";
import './assets/styles/main.scss'

HelloWorld('Greetings');

document.getElementById('root').appendChild(App('VC Webpack Boilerplate'))
console.log('Running from index.js...')