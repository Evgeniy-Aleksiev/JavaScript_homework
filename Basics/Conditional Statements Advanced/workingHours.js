function workingHours(input){
    let time = Number(input[0]);
    let dayOfTheWeek = input[1];

    if (10 <= time && time < 18){

        switch(dayOfTheWeek){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open");break;

            case "Sunday": console.log("closed");break;
        }

    } else {
        console.log("closed")
    }

}

workingHours(["17", "Sunday"]);