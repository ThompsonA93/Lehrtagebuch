
interface User {
    id: number,
    userName: string,
    bio?: string    // ? --> Optional: Kann da sein, muss aber nicht
}

const user1: User ={
    id: 1,
    userName: "Dev01"
}; // Valide, obwohl keine Bio dabei.

const user2: User = {
    id: 2,
    userName: "Dev02",
    bio: "Servas de wadl"
}; // Valide, nur Bio ist da.

const bio = user1.bio?.length;
console.log(bio); // undefined => Ungewollt
const fallbackCheckOnBio = user1.bio ?? "No Bio Provided.";
console.log(fallbackCheckOnBio)

function greet(name: string, greet?: string): string{
    if(greet){
        return `${greet} ${name}`;
    } else {
        return `Hallo ${name}`;
    }
}
let value = greet("Wedorn");
console.log(value)