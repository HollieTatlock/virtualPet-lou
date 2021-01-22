function Pet(name) {
this.name = name; 
this.age = 0;

};

Pet.prototype = {
growUp() {
    this.age ++
} // this increases the age by 1 when growUp is passed
}

module.exports = {Pet};