var HelloWorld = require('./hello-world');
var helloWorld = new HelloWorld();
console.log(helloWorld.hello('third'));
console.log(helloWorld.hello('   '));
console.log(helloWorld.hello());
console.log(helloWorld.hello(null));