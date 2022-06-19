class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if (this.spaceAvailable < spaceRequired){
            throw new Error('Not enough space in the garden.');
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        if (quantity <= 0){
            throw new Error('The quantity cannot be zero or negative.');
        }
        const plant = this.plants.find(p => p.plantName == plantName);
        if (plant == undefined){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe){
            throw new Error (`The ${plantName} is already ripe.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName){
        const plantIndex = this.plants.findIndex(p => p.plantName == plantName);
        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        const plant = this.plants[plantIndex];
        if (plant.ripe == false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity,
        })
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport(){
        const plantAsString = this.plants.map(p => p.plantName);
        const plantRow = `Plants in the garden: ${plantAsString.join(', ')}`;

        const storageRow = 'Plants in storage: The storage is empty.';
        if (this.storage.length > 0) {
            const storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            storageRow = `Plants in storage: ${storageAsString.join(', ')}`;
        }

        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantRow,

        ].join('\n');
    }
}

const myGarden = new Garden(250)

assert.equal(myGarden.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
assert.equal(myGarden.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
assert.equal(myGarden.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
assert.equal(myGarden.ripenPlant("apple", 10), "10 apples have successfully ripened.");
assert.equal(myGarden.ripenPlant("orange", 1), "1 orange has successfully ripened.");
assert.equal(myGarden.harvestPlant("orange"), "The orange has been successfully harvested.");
assert.equal(myGarden.generateReport(), "The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)");

