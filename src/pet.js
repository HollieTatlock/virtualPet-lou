const MAXIMUM_FITNESS = 10;

//Hunger
const MINIMUM_HUNGER = 0;



function Pet(name) {
this.name = name; 
this.age = 0;
this.hunger = 0;
this.fitness = MAXIMUM_FITNESS;

};

Pet.prototype = {

  

growUp() {
    this.age ++;    // this increases the age by 1 when growUp is passed
    this.hunger  += 5;  // this increases the hunger by 5 when growUp is passed
    this.fitness -= 3;   // this decreases the fitness by 3 when growUp is passed
},
walk() {
        if ((this.fitness <= 6)) {
            this.fitness += 4;
        }
        else if ((this.fitness === 7)) {
            this.fitness += 3;
        }
        else if ((this.fitness === 8)) {
            this.fitness += 2;
            
        }
        else if ((this.fitness === 9)) {
            this.fitness += 1;
        }
        else if ((this.fitness === MAXIMUM_FITNESS )) {
            return "Maximum fitness reached";
            
        }
    // need to add less than 0 or 0 itself then dead 
    },
    feed() {
        if ((this.hunger >=3 )) {
            this.hunger -=3;
        }
        else if ((this.hunger === 2)) {
            this.hunger -= 2;
        }
        else if ((this.hunger ===1)) {
            this.hunger -= 1;
        }
    
        if (this.hunger <= MINIMUM_HUNGER) {
            throw "I'm not hungry"
        }

    },
    checkUp() {
   
        if ((this.hunger >= 5 && this.fitness<= 3)) {
            return "I am hungry and I need a Walk!";
    
        } 
        else if ((this.hunger >= 5 && this.fitness>= 3)) {
            return "I am hungry!";
    
        } else if ((this.fitness<= 3 && this.hunger <= 5)) {
            return "I need a walk!";
    }
    else
        return "I feel great!";
    }
}
module.exports = {Pet};