var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, time);
});

delay(1)
  .then(console.log)
  .catch((err)=>{
    console.log(err);
  }).finally(()=>{
    console.log('=== FINALLY ===');
  })
  .then(() => 42)
  .then((number) => console.log('Hello world: ${number}'))

console.log('end first tick');
