var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Arguments should be of type number');
    }
  });
};

// asyncAdd(5, '7').then((res) => {
//   console.log('Success : ', res);
//   return asyncAdd(res, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log('Should be ', res);         //this is being called instead of being reject in first place
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


asyncAdd(5, 7).then((res) => {
  console.log('Success : ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be ', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
