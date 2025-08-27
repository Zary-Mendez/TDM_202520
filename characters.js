export const Roles = Object.freeze({
    MAGE: "Mago",
    WARRIOR: "Guerrero",
    NINJA: "Ninja"
})

export class Character {
    constructor(name, img, role) {
        this.name = name;
        this.img = img;
        this.role = role;
    }

    describe() {
        return `${this.name} es un ${this.role}`
    }
}

export const characters = [
    new Character("Zary", "https://i.pinimg.com/1200x/39/51/ef/3951ef3ad3026927de9aff189527985c.jpg", Roles.MAGE),
    new Character("Juan", "https://i.pinimg.com/1200x/39/51/ef/3951ef3ad3026927de9aff189527985c.jpg", Roles.WARRIOR),
    new Character("Samuel", "https://i.pinimg.com/1200x/39/51/ef/3951ef3ad3026927de9aff189527985c.jpg", Roles.NINJA),
];
