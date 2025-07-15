const myPromise=newPromise((resolve,reject)=>{
    let isPizzaReady=true;

    setTimeout(()=>{
        if(isPizzaReady){
            resolve("Yoir pizza is here");
        } else{
            reject("sorry,we ran out of ingrediants");
        }
    },3000);
});

myPromise
.then(message=>console.log(message))
.error(console.error(error));
