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

describe("Grow Up", () => {
  it("increases the age of the pet by 1", () => {
    const pet = new Pet("Louie")
    pet.growUp()
    expect(pet.age).toEqual(1);
  });

});

describe("Grow up get hungier and less fitter", () => {
  it("increases ages and hunger, but decreases fitness", () => {
  const pet = new Pet("Louie")
  pet.growUp()
  expect(pet.age).toEqual(1);
  expect(pet.hunger).toEqual(5);
  expect(pet.fitness).toEqual(7);
});
});

describe("Walking your pet", () => {
  it("increases its fitness levels by 4 when 'walk' is passed but no more than 10", () => {
  const pet = new Pet("Louie");
  pet.fitness = 7;
  pet.walk();

  expect(pet.fitness).toEqual(10);
});
});

