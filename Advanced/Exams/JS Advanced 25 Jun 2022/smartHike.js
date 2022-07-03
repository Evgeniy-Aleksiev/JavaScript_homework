class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
 
    addGoal(peak, altitude) {
        let result = '';
        if (this.goals.hasOwnProperty(peak)) {
            result = `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            result = `You have successfully added a new goal - ${peak}`;
        }
 
        return result;
    }
 
    hike(peak, time, difficultyLevel) {
        let result = '';
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
 
        if (this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }
 
        let diff = this.resources - time * 10;
        if (diff < 0) {
            result = `You don't have enough resources to complete the hike`;
        } else {
            this.listOfHikes.push({ peak, time, difficultyLevel });
            let usedResources = time * 10;
            this.resources -= usedResources;
 
            result = `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
 
        return result;
    };
 
    rest(time) {
        let result = '';
        let currentResources = this.resources + time * 10;
        if (currentResources >= 100) {
            this.resources = 100;
            result = `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources = currentResources;
            result = `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
 
        return result;
    }
 
    showRecord(criteria) {
        let result = '';
        if (this.listOfHikes.length == 0) {
            result = `${this.username} has not done any hiking yet`;
        }
 
        if (criteria === 'all') {
            let output = [];
            output.push('All hiking records:');
            this.listOfHikes.forEach(h => output.push(`${this.username} hiked ${h.peak} for ${h.time} hours`));
            result = output.join('\n');
        } else {
            let foundHikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);
            if (foundHikes.length === 0) {
                result = `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                let sortedFoundHikesByTime = foundHikes.sort((h1, h2) => h1.time - h2.time);
                let firstOne = sortedFoundHikesByTime[0];
                let bestHike = this.listOfHikes.find(h => h.peak == firstOne.peak);
                result = `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
            }
 
        }
        return result;
    }
}