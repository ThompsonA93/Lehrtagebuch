let id: string | number; // | --> Alt Gr + <
id = "abc";
id = 123;

/**
 * Type Narrowing bzw. Union Exhaustion
 */
type Bird = {
    fly: () => void;
    layEggs: () => void;
};
type Fish = {
    swim: () => void;
    layEggs: () => void;
};

function gibEier(animal: Bird | Fish){
    animal.layEggs();
}