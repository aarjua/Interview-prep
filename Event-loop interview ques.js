
Microtasks and Macrotasks
In JavaScript, the event loop handles two types of tasks: microtasks and macrotasks. Understanding these is crucial for grasping how asynchronous code is executed in JavaScript.

Microtasks -

Microtasks are tasks that need to be executed immediately after the currently executing script and before any macrotasks. Microtasks are processed after the currently executing script and before the event loop continues to the next phase. They are typically used for more immediate, high-priority tasks.


Common microtasks include:

Promise callbacks (then, catch, finally)
process.nextTick (Node.js-specific)


Macrotasks -

Macrotasks are tasks that are scheduled to be executed in the next iteration of the event loop. Macrotasks are processed in a queue, and the event loop processes one macrotask per iteration.


Common macrotasks include:

setTimeout
setInterval
setImmediate (Node.js-specific)
I/O tasks
UI rendering tasks
process.nextTick vs setImmediate


process.nextTick -
Type: Microtask
When: Executes immediately after the currently executing script, before the event loop continues.
Use Case: High-priority tasks that need to be executed as soon as possible, even before any I/O or timers.

setImmediate -
Type: Macrotask
When: Executes in the check phase of the event loop, after I/O events.
Use Case: Tasks that should be executed after the current event loop iteration, typically after I/O events have been processed.


Example to Illustrate Microtasks and Macrotasks
Let's consider a piece of code to see how microtasks and macrotasks are executed:

javascript
Copy code
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

setImmediate(() => {
  console.log('Immediate');
});

process.nextTick(() => {
  console.log('Next Tick');
});

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');


Execution Order
Synchronous Code Execution:

console.log('Start'); is executed immediately.
console.log('End'); is executed immediately.


Microtasks:

process.nextTick callback executes before the event loop continues.
Promise callback executes immediately after process.nextTick.


Macrotasks:

setTimeout callback executes as a macrotask in the next iteration of the event loop.
setImmediate callback executes in the check phase of the event loop, which also happens in the next iteration.


Output
The expected output is:


Start
End
Next Tick
Promise
Timeout
Immediate


Detailed Explanation -

Synchronous Code: console.log('Start') and console.log('End') run immediately.

Microtasks:
process.nextTick: console.log('Next Tick') runs right after the current script.
Promise: console.log('Promise') runs after process.nextTick but before any macrotasks.

Macrotasks:
setTimeout: console.log('Timeout') runs in the next iteration of the event loop.
setImmediate: console.log('Immediate') runs after setTimeout.

Summary -

Microtasks: Include process.nextTick and Promise callbacks. These are executed immediately after the currently executing script, before the event loop continues to the next phase.

Macrotasks: Include setTimeout, setInterval, setImmediate, and I/O tasks. These are executed in the next iteration of the event loop.



// =========================  Some other examples ============================


//============= Output of Synchronous and Asynchronous code =======================


console.log('a');  // console.log('a'); is executed immediately, so a is printed to the console.
setTimeout(() => {
  console.log('b');    // setTimeout(() => { console.log('b'); }, 0); schedules a callback to be executed after 0 milliseconds. However, this callback is placed in the task queue and will not execute until the current execution context (the synchronous code) is complete.
}, 0);
for (let k = 0; k < 1000; k++) {
  console.log(k);
}

output -
a
0
1
2
...
998
999
b



Reason - 

Synchronous Code Execution:

console.log('a'); is executed immediately, so a is printed to the console.

Asynchronous Code (setTimeout):

setTimeout(() => { console.log('b'); }, 0); schedules a callback to be executed after 0 milliseconds. However, this callback is placed in the task queue and will not execute until the current execution context (the synchronous code) is complete.


Synchronous Loop:

The for loop runs synchronously, printing numbers from 0 to 999. This is a blocking operation, meaning the event loop will not move on to the next phase (handling the task queue) until the loop completes.


Event Loop:

After the loop completes and the call stack is empty, the event loop picks up tasks from the task queue.
The setTimeout callback (console.log('b');) is then executed, printing b to the console.



//============================= Output of this code  ==========================

console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');


Output -

Start
End
Promise
Timeout


Reason -

console.log('Start'); executes first.
setTimeout schedules console.log('Timeout'); to run after 0ms, but it's placed in the macrotask queue.
Promise.resolve().then schedules console.log('Promise'); to run in the microtask queue.
console.log('End'); executes.
Microtasks run before macrotasks, so Promise callback executes next.
Finally, the setTimeout callback executes.



//================ Output of this code ============================

console.log('Start');
process.nextTick(() => {
  console.log('Next Tick');
});
setImmediate(() => {
  console.log('Immediate');
});
console.log('End');



output -

Start
End
Next Tick
Immediate


Reason -

console.log('Start'); executes first.
process.nextTick schedules console.log('Next Tick'); to run at the end of the current operation.
setImmediate schedules console.log('Immediate'); to run in the check phase.
console.log('End'); executes.
process.nextTick callback executes before the event loop continues.
Finally, the setImmediate callback executes.