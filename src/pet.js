function Pet() {
this.name = "Louie";
this.age = 0;

};

Pet.prototype = {
growUp() {
    this.age ++
}
}

module.exports = {Pet};