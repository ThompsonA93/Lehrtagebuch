/**
 * Open/Closed Principle beschreibt das Klassen offen für 
 * Erweiterung (Extends, Implements) sind, aber geschlossen für Modifikationen.
 */
class BadRectangle { constructor(public width: number, public height: number){} }
class BadCircle { constructor(public radius: number){} }
// Für jede weitere Shape muss diese Klasse verändert werden, daher schlecht.
class BadAreaCalculator {   
    public calculate(shape: any){
        if(shape instanceof BadRectangle){
            return shape.width * shape.height;
        } else if (shape instanceof BadCircle){
            return Math.PI * shape.radius;
        }
    }
}
// Verbesserte Variante: Weitere Shapes benötigen keine Modifikationen von Klassen
interface Shape{ 
    calculateArea(): number; 
}
class Rectangle implements Shape{
    constructor(public width: number, public heigth: number){}
    calculateArea(): number {
        return this.width * this.heigth;
    }
}
class Circle implements Shape{
    constructor(public radius: number){}
    calculateArea(): number {
        return Math.PI * this.radius;
    }
}

