function firstNonRepeatedChar(str) {
	
 // Write your code here
	for(let i=0;i<str.length;i++){
		if(str.firstIndexOf(str.charAt(i))==lastIndexOf(str.charAt(i))){
			return str.charAt(i);
		}
		else{
			return null;
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
