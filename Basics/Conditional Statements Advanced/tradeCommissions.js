function tradeCommissions(input){
    let city = input[0];
    let sales = Number(input[1]);
    let correctCities = ["Sofia", "Varna", "Plovdiv"]

    if (sales >= 0 && correctCities.includes(city)){
        let result = 0

        if (sales <= 500){
            
            switch(city){
                case "Sofia": result = sales * 0.05;break;
                case "Varna": result = sales * 0.045;break;
                case "Plovdiv": result = sales * 0.055;break;
            }

        } else if (sales <= 1000){

            switch(city){
                case "Sofia": result = sales * 0.07;break;
                case "Varna": result = sales * 0.075;break;
                case "Plovdiv": result = sales * 0.08;break;
            }
    
        } else if (sales <= 10000){

            switch(city){
                case "Sofia": result = sales * 0.08;break;
                case "Varna": result = sales * 0.10;break;
                case "Plovdiv": result = sales * 0.12;break;
            }
            
        } else if (10000 < sales){

            switch(city){
                case "Sofia": result = sales * 0.12;break;
                case "Varna": result = sales * 0.13;break;
                case "Plovdiv": result = sales * 0.145;break;
            }
    
        }

        console.log(result.toFixed(2))
    } else {
        console.log("error")
    }

}

tradeCommissions(["Kaspichan",
"-50"])

