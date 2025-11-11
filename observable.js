//ex1
// class Observable{
//     constructor(subscribe){
//         this.subscribe=subscribe;
//     }
//     subscribe(observer){
//         return this.subscribe(observer);
//     }
// }
// const observable=new Observable((observer)=>{
//     observer.next('Hi');//send value
//     observer:(val)=>console.log(val);
//     complete:()=>console.log('Done');
// })
// console.log('welcome');

//ex2
// without  class only using constructor function
function createObservable(subscriber){
    return{
        subscribe: (observer) =>{
            subscriber(observer);
        }
    };

}
const observable=createObservable((observer)=>{
    observer.next('hello');
     setTimeout(()=>{//send value
    observer.next('from timeout method');
    observable.complete();

},1000);
});
observable.subscribe({
    next:(val)=>console.log(val),
    complete:()=>console.log('done')
});