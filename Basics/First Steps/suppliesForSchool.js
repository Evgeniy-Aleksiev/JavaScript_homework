function suppliesForSchool(input){
    let pen = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let percentDiscount = Number(input[3]) / 100;

    let penPrice = pen * 5.80;
    let markersPrice = markers * 7.20;
    let cleaningDetergentPrice = cleaningDetergent * 1.20;
    let totatlPrice = penPrice + markersPrice + cleaningDetergentPrice;
    console.log(totatlPrice - (totatlPrice * percentDiscount)) 
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);