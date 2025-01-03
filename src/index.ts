// timers -> pending callbacks -> idle, prepare -> poll -> check -> close callback

// Import modules using ES module syntax
import fs from "fs";
import crypto from "crypto";

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World")); // 1. Logs: "Hello, World"

console.log("1, script started!"); // 2. Logs: "1, script started!"

// Timers phase: setTimeout
setTimeout(() => {
  console.log("2, settimeout 0s callback (macrotask)"); // Executes in the Timers phase (Macrotask).
}, 0);

setTimeout(() => {
  console.log("3, settimeout 1s callback (macrotask)"); // Executes in the Timers phase after the first callback.
}, 1000);

// Check phase: setImmediate
setImmediate(() => {
  console.log("4, setImmediate callback check"); // Executes in the Check phase.
});

// Microtask: Promises
Promise.resolve().then(() => {
  console.log("5, Promise has been resolved! (microtask)"); // Executes in the Microtasks queue.
});

// Microtask: process.nextTick
process.nextTick(() => {
  console.log("6, Process nexttick callback (microtask)"); // Executes in the Microtasks queue.
});
