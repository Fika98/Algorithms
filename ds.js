let array = [1,2,3]

for(let i = 0; i < array.length - 1; i++){
    for(let j = i + 1; j < array.length; j++){
        console.log(array[i],array[j])
    }
}

