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
  pet.fitness = 3;
  pet.walk();
  expect(pet.fitness).toEqual(7);
  });
});

describe("Feeding your pet", () => {
  it("decreases your pets hunger by 3 when 'feed' is passed but hunger should not fall below 0", () => {
    const pet = new Pet("Louie");
    pet.hunger = 7
    pet.feed();
    expect(pet.hunger).toEqual(4);
  });
});
 describe('checkUp', () => {

  it('Lets you know if the pet is hungry >= 5', () => {
      const pet = new Pet("Louie");
        pet.hunger = 7;
        expect(pet.checkUp()).toBe("I am hungry!");
    });
    
  it('Lets you know if the pet needs a walk <= 3', () => {
      const pet = new Pet("Louie");
        pet.fitness = 1
        expect(pet.checkUp()).toBe("I need a walk!");
    });

  it('lets you know if the pet is hungry and needs a walk if hunger is >= 5 & fitness is <= 3', () => {
    const pet = new Pet("Louie");
    pet.hunger = 6;
    pet.fitness = 2;
    expect(pet.checkUp()).toBe("I am hungry and I need a Walk!");
  });

  it('Says pet feels great if hunger is <5 and fitness is >3', () => {
    const pet = new Pet("Louie");
    pet.hunger = 2
    pet.fitness = 10
    expect(pet.checkUp()).toBe("I feel great!");
  });
});