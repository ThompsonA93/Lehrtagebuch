# 19-01-2026 -- Typescript

TypeScript ist eine kompilierte Sprache mit starken Typsystem.
Es basiert als Superset auf der Programmiersprache JavaScript. 
Das bedeutet, dass TypeScript code, `.ts` mithilfe von `TSC` in 
Javascript umgewandelt wird.

## Recherche

1. Folgender Pseudocode beschreibt die sogenannte **Antisymmetrie** im Bezug zu Objekten und Datenstrukturen. Wann genau bietet es sich nun an Prozeduralen Code (mit Datenstrukturen) zu schreiben, und wann Objektorientierten Code (mit Klassen)?
    ```java
    // Beispiel 1.
    public class Square{
        public Point topLeft;
        public double side;
    }

    public class Rectangle{
        public Point topLeft;
        public double height;
        public double width;
    }

    public class Circle {
        public Point center;
        public double radius;
    }

    public class Geometry {
        public final double PI = 3.141;
        public double area(Object shape) throws NoSuchShapeException{
            if(shape instanceof Square){
                Square s = (Square) shape;
                return s.side * s.side;
            }else if(shape instanceof Rectangle){
                Rectangle r = (Rectangle) shape;
                return r.height * r.width;
            }else if(shape instanceof Circle){
                Circle c = (Circle) shape;
                return PI * c.radius * c.radius;
            }
            throw new NoSuchShapeException();
        }
    }
    ```

    ```java
    // Beispiel 2.
    public class Square implements Shape {
        private Point topLeft;
        private double side;

        public double area(){
            return side*side;
        }
    }

    public class Rectangle implements Shape {
        private Point topLeft;
        private double height;
        private double width;

        public double area(){
            return height * width;
        }
    }

    public class Circle implements Shape{
        private Point center;
        private double radius;
        public final double PI = 3.141;

        public double area(){
            return PI * radius * radius;
        }
    }
    ```
2. Das **Gesetz von Demeter** ist ein wichtiges Designprinzip in der Programmierung. Welche der folgenden Code Snippets folgen diesem Gesetz?
    ```javascript
    final String outputDir_1 = context.getOptions().getDir().getAbsolutePath();
    final String outputDir_2 = context.options.dir.absolutePath
    final String outputDir_3 = context.getOutputPath();
    String name = user.getFirstName().toLowerCase().trim();
    ```
3. Erkläre den Unterschied zwischen den folgenden Komponenten in Typescript und programmiere ein Beispiel das die Behauptung validiert:
   - Typ und Klasse
   - Klasse und Interface
   - Typ und Interface
   - Interface und Abstrakte Klasse
4. **Code Smells** beschreiben schlechte Praktiken in der Programmierung. Kontextualisiert in 4 Kategorien, erkläre die folgenden: 
   - Bloater
   - Coupler
   - Dispensables
   - Inflexibles
5. Das **SOLID Prinzip** beschreibt über 5 Regeln wie guter Code geschrieben werden kann. Erkläre jedes dieser Prinzipien mit Kontext außerhalb der Software-Entwicklung und programmiere je ein Beispiel dazu.
   - Single Responsibility Principle
   - Open/Closed Principle
   - Liskov Substitution Principle
   - Interface Segregation Principle
   - Dependency Injection Principle
6. **Programmierpatterns** auf Klassenebene beinhalten verschiedene Muster. Erkläre folgende Patterns:
   - Singleton
   - Facade
   - Factory
   - Abstract Factory
   - Adapter