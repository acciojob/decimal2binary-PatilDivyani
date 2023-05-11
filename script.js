function threeSum(arr, target) {
// write your code here
  for(let i = 0; i<arr.length; i++){
	  let rem = arr[i]%2;
	  let dec = arr[i]/2;
	  target.push(rem);
  }
	return target.reverse();
}

module.exports = threeSum;
