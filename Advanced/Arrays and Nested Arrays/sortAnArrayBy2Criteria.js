function solve(array){
    array.sort(twoCriteria);
    
    function twoCriteria(current, next){
        if (current.length === next.length){
            return current.localeCompare(next);
        } 
        return current.length - next.length;
    }

    console.log(array.join('\n'));
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);