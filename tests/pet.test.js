const {Pet} = require('../src/pet');


describe("constructor", () => {
  it("returns an object", () => {
    const pet = new Pet("Louie")
      expect(new Pet()).toBeInstanceOf(Object);
  });

  it("Gives my pet a name", () => {
    const pet = new Pet("Louie")
      expect(pet.name).toBe("Louie");
  });

  it('has a initial age of 0', () => {
    const pet = new Pet("Louie")
    expect(pet.age).toEqual(0);
  });

});

describe("grows my pet up by 1 year", () => {
  it("increases the age of the pet by 1", () => {
    const pet = new Pet("Louie")
    pet.growUp()
    expect(pet.age).toEqual(1);
  });

});