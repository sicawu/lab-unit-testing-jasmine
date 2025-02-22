// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
          it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(2, 4)).toEqual(8);
            expect(calculateArea(4, 16)).toEqual(64);
          });
      
          it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})
