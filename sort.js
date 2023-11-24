 
function sortedArray(arr){
    var arraysorted=arr.sort((a,b) => a-b);
    return arraysorted;
}
console.log(sortedArray([6,4,3,5,10]));