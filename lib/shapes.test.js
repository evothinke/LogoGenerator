// test suite for the Shapes, Circle, Triangle, and Square classes.
//  The require('./shapes') statement imports these classes from shapes.js.
const { Shape, Circle, Triangle, Square } = require('./shapes');

// Each class has a render method that returns an SVG string with the attributes of the shape. 
// The tests in this file create instances of the Circle, Triangle, and Square classes,
//  and call their render methods. Then, the expected SVG string is compared to the actual SVG string 
// returned by the render method using the Jest expect function.




describe('Shapes', () => {
  describe('Circle', () => {
    it('should render a circle with the correct attributes', () => {
      const circle = new Circle('Circle', 'blue', 100, 100, 50);
      expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" fill="blue" />');
    });
  });

  describe('Triangle', () => {
    it('should render a triangle with the correct attributes', () => {
      const triangle = new Triangle('Triangle', 'green', 50, 50, 75, 150, 100, 50);
      expect(triangle.render()).toEqual('<polygon points="50,50 75,150 100,50" fill="green" />');
    });
  });

  

  describe('Square', () => {
    it('should render a square with the correct attributes', () => {
      const square = new Square('Square', 'red', 50, 50, 75, 75);
      expect(square.render()).toEqual('<rect x="50" y="50" width="75" height="75" fill="red" />');
    });
  });
});
