var ngrams = require("./gramify");

var s=process.argv[2] || "this is a sample sentence";
var n=process.argv[3]||2;


console.log(ngrams(s,n));

