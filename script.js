// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function firstNonRepeatedChar(str) {
	let obj={};
	for(let i=0;i<str.length;i++){
		if(obj[str[i]]!=undefined){
			obj[str[i]]+=1;
		}
		else{
			obj[str[i]]=1;
		}
	}
for(let i=0;i<str.length;i++){
	if(obj[str[i]]==1){
		return str[i];
	}
}
	return null;
	
	
 // Write your code here
	//  const charCount = {};

 //  // Iterate through the string to count character frequencies
 //  for (let i = 0; i < str.length; i++) {
 //    const char = str[i];
 //    charCount[char] = (charCount[char] || 0) + 1;
 //  }

 //  // Iterate through the string again to find the first non-repeating character
 //  for (let i = 0; i < str.length; i++) {
 //    const char = str[i];
 //    if (charCount[char] === 1) {
 //    return char; // Return the first non-repeating character
 //    }
 //  }

 //  // If no non-repeating character is found, return null or a default value
 // return null;
}
	// console.log("null");

const  input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
