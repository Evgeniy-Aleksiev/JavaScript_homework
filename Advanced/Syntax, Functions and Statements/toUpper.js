function toUpper(input){
    let word = input.toUpperCase().match(/\w+/g).join(', ')
    console.log(word)
}

toUpper('Hi, how are you?');