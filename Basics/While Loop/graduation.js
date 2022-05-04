function graduation(input){
    let index = 0;
    let sumOfGrade = 0;
    let tornAtSchool = 0;
    let classes = 0 

    let studentName = input[index++];

    while (true){
        let currentGrade = Number(input[index]);
        
        if (currentGrade >= 4){
            sumOfGrade += currentGrade
            classes++
            if (classes === 12){
                let averageGrade = sumOfGrade / index;
                console.log(`${studentName} graduated. Average grade : ${averageGrade.toFixed(2)}`)
                break
            }   
        } else {
            tornAtSchool += 1
            if (tornAtSchool >= 2){
                console.log(`${studentName} has been excluded at ${classes} grade`)
                break;
            }
            classes++
        }
        index++
    }
    
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


