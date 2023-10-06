function firstNonRepeatedChar(str) {
	
 // Write your code here
	for(let i=0;i<str.length;i++){
		if(str.firstIndexOf(str[i])==lastIndexOf(str[i])){
			console.log(str[i]);
			break;
		}

	}
	console.log("null");
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
