
Microtasks and Macrotasks
In JavaScript, the event loop handles two types of tasks: microtasks and macrotasks.Understanding these is crucial for grasping how asynchronous code is executed in JavaScript.

  Microtasks -

  Microtasks are tasks that need to be executed immediately after the currently executing script and before any macrotasks.Microtasks are processed after the currently executing script and before the event loop continues to the next phase.They are typically used for more immediate, high - priority tasks.


Common microtasks include:

Promise callbacks(then, catch, finally)
process.nextTick(Node.js - specific)


Macrotasks -

  Macrotasks are tasks that are scheduled to be executed in the next iteration of the event loop.Macrotasks are processed in a queue, and the event loop processes one macrotask per iteration.


Common macrotasks include:

setTimeout
setInterval
setImmediate(Node.js - specific)
I / O tasks
UI rendering tasks



process.nextTick vs setImmediate -

  process.nextTick -
  Type: Microtask
When: Executes immediately after the currently executing script, before the event loop continues.
Use Case: High - priority tasks that need to be executed as soon as possible, even before any I / O or timers.

  setImmediate -
  Type: Macrotask
When: Executes in the check phase of the event loop, after I / O events.
Use Case: Tasks that should be executed after the current event loop iteration, typically after I / O events have been processed.



function y() {
  console.log(1);

  setTimeout(() => { console.log(2) }, 0);

  new Promise(resolve => { console.log(3); resolve(4); console.log(5) }).then((data) => console.log(data))
  new Promise(resolve => resolve(6)).then(console.log)
  console.log(7)
}

console.log(y())

Output:

1
3
5
7
undefined
4
6
2

Example to Illustrate Microtasks and Macrotasks
Let's consider a piece of code to see how microtasks and macrotasks are executed:


javascript code -

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

    Microtasks: Include process.nextTick and Promise callbacks.These are executed immediately after the currently executing script, before the event loop continues to the next phase.

      Macrotasks: Include setTimeout, setInterval, setImmediate, and I / O tasks.These are executed in the next iteration of the event loop.



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

Asynchronous Code(setTimeout):

setTimeout(() => { console.log('b'); }, 0); schedules a callback to be executed after 0 milliseconds.However, this callback is placed in the task queue and will not execute until the current execution context(the synchronous code) is complete.


Synchronous Loop:

The for loop runs synchronously, printing numbers from 0 to 999. This is a blocking operation, meaning the event loop will not move on to the next phase(handling the task queue) until the loop completes.


Event Loop:

After the loop completes and the call stack is empty, the event loop picks up tasks from the task queue.
The setTimeout callback(console.log('b');) is then executed, printing b to the console.



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



        // ======================= output with forloop ==============


        setTimeout(() => {
          console.log('Timeout');
        }, 2000);

setImmediate(() => {
  console.log('Immediate');
});


process.nextTick(() => {
  console.log('Next Tick');
});

Promise.resolve().then(() => {
  console.log('Promise');
});
for (let k = 0; k < 10; k++) {
  console.log(k);
}

console.log('End');


Output -

  Start
0
1
2
...
8
9
End
Next Tick
Promise
Immediate
Timeout



// setTimeout time is 0 then it will print Timeout before Immediate ==========

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
for (let k = 0; k < 10; k++) {
  console.log(k);
}

console.log('End');


Output -

  Start
0
1
2
...
8
9
End
Next Tick
Promise
Timeout
Immediate

//=============== Output of this code =========================

let abc = "hello"

function getfun() {

  console.log("sdfbsfd", this.abc)
  console.log("sdfhsdgfjs", abc)
}
getfun() 


output 1. -

  console.log("sdfbsfd", this.abc); // undefined  - this.abc is undefined because let does not create a property on the global object. If abc was declared with var, this.abc would be "hello".
console.log("sdfhsdgfjs", abc);   // "hello"

with var definition -

  console.log("sdfbsfd", this.abc); // hello
console.log("sdfhsdgfjs", abc); // hello

In strict mode:

this would be undefined, and accessing this.abc would throw an error.Since you did not enable strict mode, this doesn't apply here.

Output -
  console.log("sdfbsfd", this.abc); // TypeError: Cannot read property 'abc' of undefined
console.log("sdfhsdgfjs", abc);   // "hello"


  //==================== Thread Pool ===========================

  In Node.js, the thread pool is a mechanism that handles the execution of asynchronous operations that cannot be executed on the main event loop.These operations typically include file system operations, DNS lookups, cryptographic operations, and compression, among others.The thread pool ensures that these tasks do not block the event loop, thus allowing Node.js to remain non - blocking and highly performant.

  The thread pool in Node.js is a powerful feature for managing asynchronous I / O operations, enabling Node.js to remain non - blocking and efficient.By understanding and properly configuring the thread pool, you can optimize your Node.js applications for better performance and scalability.

How the Thread Pool Works -

  Node.js uses the libuv library to provide a thread pool.By default, this thread pool contains four threads, but this can be adjusted.


Default Thread Pool Size -

  The default size of the thread pool is 4, but you can adjust it using the UV_THREADPOOL_SIZE environment variable.

    Example -


      process.env.UV_THREADPOOL_SIZE = 8;
const fs = require('fs');

console.log('Start');

for (let i = 0; i < 10; i++) {
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`File ${i + 1} content:`, data);
  });
}

console.log('End');


// ======================= Worker Thread =========================

Worker threads in Node.js provide a way to run JavaScript code in parallel, allowing for the execution of CPU - bound tasks without blocking the main event loop.This feature is useful for applications that need to perform intensive computations or need parallel processing capabilities.

Key Concepts
Worker Threads: Separate threads that can execute JavaScript code in parallel with the main event loop.
Main Thread: The main Node.js event loop that handles I / O operations and the non - blocking execution of JavaScript code.
  Thread - safe: Operations that can be safely executed across multiple threads without causing data corruption or race conditions.


    example - 

const { Worker } = require('worker_threads');

// Function to create a worker and handle its messages
function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// Use the worker thread
runService('Hello, Worker!')
  .then(result => console.log(result))
  .catch(err => console.error(err));


  Worker Thread(worker.js) code:

const { parentPort, workerData } = require('worker_threads');

// Perform a computation or a task
const result = workerData + ' - Processed by Worker';

// Send the result back to the main thread
parentPort.postMessage(result);


In this example:

The main thread creates a worker thread using the Worker constructor and specifies the script to run (worker.js).
The worker thread receives data from the main thread(workerData), processes it, and sends a message back to the main thread using parentPort.postMessage.
