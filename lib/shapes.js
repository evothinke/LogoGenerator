class Shapes {
    constructor(shapes) {
        // The shapes array holds instances of Shape and its subclasses
        this.shapes = shapes;
    }

    // Rendeing all the shapes in the shapes array as SVG elements
    render() {
        // mapping each shape to its SVG representation, and concatenatingf all of them
        const svgShapes = this.shapes.map(shape => shape.render()).join('');
        // Wrapping the concatenated string in an SVG tag
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">${svgShapes}</svg>`;
    }
}

class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}


class Circle extends Shape {
    constructor(name, color, x, y, radius) {
        super(name, color);
        this.x = x;
        this.y = y;
        this.radius = radius;
        //x, y and radius of circle
    }

    // rendering circle as an SVG element
    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`;
    }
}

// A subclass of Shape representing a square
class Square {
    constructor(name, color, x, y, width) {
        // square name
        this.name = name;
        // sq color
        this.color = color;
        // top-left corner of the square
        this.x = x;
        // top-left corner of the square
        this.y = y;
        // width og square
        this.width = width;
    }

    // Rendering the square as an SVG element
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.width}" fill="${this.color}" />`;
    }
}

// A subclass of Shape representing a triangle
class Triangle extends Shape {
    constructor(name, color, x1, y1, x2, y2, x3, y3) {
        super(name, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        //vertex coordinates of a triangle
    }

    // Rendering the triangle as an SVG element
    render() {
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
    }
}

// Exporting the classes so they can be used in other modules
module.exports = { Shapes, Shape, Circle, Square, Triangle };
