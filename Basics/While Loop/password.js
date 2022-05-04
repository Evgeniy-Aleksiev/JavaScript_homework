function password(input){
    let username = input[0];
    let correctPassword = input[1];
    
    let index = 2;
    let isValid = true;

    while (input[index] !== correctPassword){
        index++;
        if (index > input.length){
            isValid = false;
            break;
        }
    }

    if (isValid){
        console.log(`Welcome ${username}!`)
    } 
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
