const count = true;
const x = function() {
    console.log('hello')
};

if(count instanceof Function) {
		console.log('The variable is of function type');
}
else {
    console.log('The variable is not of function type');
}

if(x instanceof Function) {
		console.log('The variable is of function type');
}
else {
    console.log('The variable is not of function type');
}
