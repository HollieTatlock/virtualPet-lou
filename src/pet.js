function Pet(name) {
this.name = name; 
this.age = 0;
this.hunger = 0;
this.fitness = 10;

};

Pet.prototype = {
growUp() {
    this.age ++;    // this increases the age by 1 when growUp is passed
    this.hunger  += 5;  // this increases the hunger by 5 when growUp is passed
    this.fitness -= 3;   // this decreases the fitness by 3 when growUp is passed
} 
}

module.exports = {Pet};