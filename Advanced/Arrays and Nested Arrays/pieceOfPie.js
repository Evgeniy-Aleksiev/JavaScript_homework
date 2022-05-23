function pieceOfPie(arr, flavorOne, flavorTwo){
    let newArr = [];
    let startIter = false;

    for (let flavour of arr){
        if (startIter){
            newArr.push(flavour);
            if (flavour === flavorTwo){
                console.log(newArr);
                return newArr;
            }
        } else if (flavour === flavorOne){
            newArr.push(flavour);
            startIter = true;
        };

    };
};

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
