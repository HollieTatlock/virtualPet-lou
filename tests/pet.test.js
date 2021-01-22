const {Pet} = require('../src/pet');
const pet = new Pet()

describe("constructor", () => {
  it("returns an object", () => {
      expect(new Pet()).toBeInstanceOf(Object);
  });

  it("Gives my pet a name", () => {
  
      expect(pet.name).toEqual("Louie");
  });

  it('has a initial age of 0', () => {

    expect(pet.age).toEqual(0);
  });

});

describe("grows my pet up by 1 year", () => {
  it("increases the age of thet pet by 1", () => {
    pet.growUp()
    expect(pet.age).toEqual(1);
  });

});