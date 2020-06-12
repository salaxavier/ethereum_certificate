/*Solidity Compiler
Use: #node compile.js
The "require" statement executes the content of the required file as JS code.
In order to call the contracts to be compiled, they need to be accessed out from the disk.
*/

//Standard modules
const path = require('path');
const fs = require('fs');
//Downloaded modules
const solc = require('solc'); //Solidity Compiler

//Set path to contracts
const certificatePath = path.resolve(__dirname, 'contracts', 'Certificate.sol'); //__dirname = local node project directory
const source = fs.readFileSync(certificatePath, 'utf8');

//Compile contracts
//module.exports = solc.compile(source, 1); //compile contracts while making theresulting output available for other files of the project
module.exports = solc.compile(source, 1).contracts[':Certificate']; //same above + compile only Inbox contract (Inbox object from the console.log output)

//console.log(solc.compile(source, 1));
