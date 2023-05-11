function threeSum(arr, target) {
// write your code here
  
	
	
	/*
	for(let i = 0; i<arr.length; i++){
	  let rem = arr[i]%2;
	  let dec = arr[i]/2;
	  target.push(rem);
  }
	return target.reverse();*/
}

let dec = parseInt(prompt("Enter no:"));
let binary = "";
while(dec>0){
	binary = (dec%2) + binary;
	dec = Math.floor(dec/2);
}
console.log(binary);

module.exports = threeSum;
