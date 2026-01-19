# 12-01-2026 -- Javascript

## Recherche

1. Wie wird folgender Code berechnet?
```js
let x = (![] + [])[+[]] 
    + (![] + [])[+!+[]]
    + ([![]] + [][[]])[+!+[] + [+[]]] 
    + (![] + [])[!+[] + ! +[]];
console.log(x);
```
2. Erkläre das Resultat des folgenden Codeabschnittes:
```js
const a = 1e16
const b = -1e16
const c = 1.1
console.log((a+b)+c, "===", a+(b+c));
```
3. Erkläre die Begriffe: Hoisting, Currying, Reflection, Closure, 
4. Bzgl. Funktionen, erkläre mithilfe eines Code Snippets: Function Composition, Early Return, Pure Function, Higher Order Function, Method Overriding, Recursion, Prop Drilling
5. Wie unterscheiden sich die folgenden Typescript Features: Type, Class, Interface, Abstract Class
6. Recherchiere folgende Referenzen und berichte kurz über was diese schreiben: 
   - Cay Horstmann: JavaScript für Ungeduldige
   - Matt Pocock: Total TypeScript
   - Robert C. Martin: Clean Code
   - Robert C. Martin: Clean Architecture
   - Alistair Cockburn: Hexagonal Architecture
   - Scott Millett: Patterns, Principles and Practices of Domain-Driven Design
   - Vaughn Vernon: Implementing Domain-Driven Design
7. Lies das Paper "The Power Of Ten" des NASA Jet Propulsion Laboratory. Fasse die Regeln in einem Artikel zusammen und überlege passende Code-Beispiele.
