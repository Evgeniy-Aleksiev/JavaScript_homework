function vacationBooksList(input){
    let bookPages = Number(input[0]);
    let reedPagesPerH = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalTimeReadingBook = bookPages / reedPagesPerH;
    let hoursNeedPerDay = totalTimeReadingBook / numberOfDays;
    console.log(hoursNeedPerDay)
}

vacationBooksList(["212 ", "20 ", "2 "]);