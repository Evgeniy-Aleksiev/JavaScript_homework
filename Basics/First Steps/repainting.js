function repainting(input){
    let nylonPrice = (Number(input[0]) + 2) * 1.50
    let paintPrice = (Number(input[1]) * 1.10) * 14.50 
    let thinnerPrice = Number(input[2]) * 5
    let hours = Number(input[3])

    let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.40
    console.log(((totalMaterialPrice * 0.30) * hours) + totalMaterialPrice)
}

repainting(["10 ", "11 ", "4 ", "8 "]);