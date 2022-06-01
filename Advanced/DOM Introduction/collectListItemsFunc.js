function extracText(){
    const element = document.querySelectorAll('ul#items li');
    let textarea = document.querySelector('#result');
    for (let node of element){
        textarea.value += node.textContent + "\n";
    }
}