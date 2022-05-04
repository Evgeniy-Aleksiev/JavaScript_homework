function accountBalance(input){
    let totalAccountBalance = 0;
    let index = 0;

    let command = input[index];

    while (command !== "NoMoreMoney"){
        let n = Number(command);
        
        if (n < 0){
            console.log("Invalid operation!");
            break;
        }

        totalAccountBalance += n
        console.log(`Increase: ${n.toFixed(2)}`);
        index++;
        command = input[index];
    }

    console.log(`Total: ${totalAccountBalance.toFixed(2)}`);

}

accountBalance(["120",
"45.55",
"-150"])

