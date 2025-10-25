// global code 
let x=20;//primitive(stack)

let user={name:'rani'}// Object(heap)

function greet(msg){
    let text=msg+' '+user.name;
    return text;
}
greet();


function main(){
    let message=greet('hello');
    console.log(message);
}
main();

//global excution context 
//memory allocation phase

// x->undefined
// user->undefined
// greet->function
// //excution phase
// x=10;//stored in stack memory
// user={name:'rani'}//stoward in heap memory

//callstack
// [main,greet]LIFO=>greet()=>greet get excuted &then its context popped out
// [main]=>main finshed get's popped out
// []callstack is empty 
// main()=>greet()excution context
// main() excution context
// global excution context

// stack
x=10;
// user->(ref to heap obj)
//message="hello rajani"
//text=" hello"

//heap
//user->{name:'rani'};
// greet->function object
// main->function object
//function excution ends
//greet returns the "hello"->it's context get's popped out from call stack
//back to main () it logs the message "hello rani"
// main finished -> it  context get is popped out
//only global excution context remain until the program ends
//program ends the global context popped out

// point 4
// code 
// function can be stoward in heap memory//function type as function
// All below events used to handle theda or action mostly without formate or library
// 1.Event Bubbling or Event Propagation
// The event start from target (child)element &propagets to the parent elements

// or
// 1. Event Bubbling:the event starts from target element(child) and 
//     bubbles to it's parent
 


