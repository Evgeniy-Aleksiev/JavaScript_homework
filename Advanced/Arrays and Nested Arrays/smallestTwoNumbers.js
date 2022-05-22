function smallestTwoNumbers(arr){
    res = arr.sort((a,b) => a - b).slice(0, 2);
    console.log(res.join(" "));

};

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
