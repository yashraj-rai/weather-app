console.log('Starting app');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);

setTimeout(() => {
  console.log('Second callback works');
}, 0);

console.log('Finishing app');
