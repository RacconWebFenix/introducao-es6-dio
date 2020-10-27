let loggedIn = false;
function callIfAuthenticate(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticate(() => sum(2,3)));
loggedIn = true;
console.log(callIfAuthenticate(() => sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticate(() => sum(2,3)));