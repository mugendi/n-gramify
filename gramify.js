var _ = require("lodash");

module.exports=function ngrams(s,ngrams,filterShort){
	
	s=s || "this is a sample string";
	ngrams = ngrams || 2;
	filterShort= filterShort || true;
	 
	 //get all words in string
	var words = s.split(" ");
	var tokens =[],
		chunks=[];

	for(var i=0; i< ngrams; i++){
		//console.log(i)
		chunks=_.chunk(words.slice(i),ngrams);
		console.log(chunks)
	 	tokens=_.union( tokens, chunks )
	}

	/*//filter short tokens
	if(filterShort){
		tokens=_.filter(tokens, function(val){
		return val.length==ngrams
	});*/
	 
};