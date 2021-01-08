let array = [3,5,-4,8,11,1,-1,6]
let targetSum = 10

function twoNumberSum(array, targetSum) {
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === targetSum){
                return[array[i],array[j]]
            }
        }
    }
      return [];
}       
twoNumberSum(array,targetSum)

                        // TOW POINTER TECHNIQUE
// function twoNumberSum(array, targetSum) {
// 	array.sort((a,b) => a - b )
// 	let left = 0
//   let right = array.length - 1
//     while(left < right){
//         let currentSum = array[left] + array[right]
//         if(currentSum === targetSum){
//         	return [array[left],array[right]]
//         }else if(currentSum < targetSum){
//           left++;
//         }else if(currentSum > targetSum){
//           right--;
//         }
//     }
//     return []
// }