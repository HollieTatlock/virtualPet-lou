const {Pet} = require('../src/pet');

describe("constructor", () => {
  it("returns an object", () => {
      expect(new Pet("Louie")).toBeInstanceOf(Object);
  });

  it("Gives my pet a name", () => {
      const pet = new Pet("Louie");

      expect(pet.name).toEqual("Louie");
  });




  
});
