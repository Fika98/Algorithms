let array = [3,5,-4,8,11,1,-1,6]

let targetSum = 10


function twoNumberSum(array, targetSum) {
      for(let i = 0; i < array.length; i++){
          const firstNum = array[i]
          for(let j = 0; j < array.length; j++){
              const secondNum = array[j]
              if(firstNum + secondNum=== targetSum){
                  console.log([firstNum,secondNum])
              }
          }
      }
          
  }
  
  twoNumberSum(array,targetSum)

