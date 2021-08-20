class Perk {
    constructor(name, character, type) {
        this.name = name;
        this.character = character;
        this.type = type;
    }
}

const perkList = [
    new Perk("Adrenaline", "Meg", ["Healing", "Exhaustion", "Movement speed"]),
    new Perk("Aftercare", "Jeff", ["Aura", "Hook", "Healing"]),
    new Perk("Alert", "Feng", ["Pallet", "Wall", "Generator", "Aura"]),
    new Perk("Any Means Necessary", "Yui", ["Pallet"]),
    new Perk("Appraisal", "Elodie", ["Chest", "Item", "Token"]),
    new Perk("Autodidact", "Adam", ["Skill Checks", "Healing", "Token"]),

    new Perk("Babysitter", "Steve", ["Hook", "Stealth", "Aura"]),
    new Perk("Balanced Landing", "Nea", ["Exhaustion", "Movement speed"]),
    new Perk("Better Together", "Nancy", ["Generator", "Aura"]),
    new Perk("Bite The Bullet", "Leon", ["Healing", "Stealth", "Skill Checks"]),
    new Perk("Blast Mine", "Jill", ["Generator", "Stun", "Aura"]),
    new Perk("Blood Pact", "Cheryl", ["Obsession", "Aura", "Healing", "Movement speed"]),
    new Perk("Boil Over", "Kate", ["Wiggle speed", "Aura", "Hook"]),
    new Perk("Bond", "Dwight", ["Aura"]),
    new Perk("Botany Knowledge", "Claudette", ["Healing", "Item"]),
    new Perk("Breakdown", "Jeff", ["Hook", "Aura"]),
    new Perk("Breakout", "Yui", ["Movement speed", "Wiggle speed"]),
    new Perk("Buckle Up", "Ash", ["Aura", "Healing"]),
    new Perk("Built To Last", "Felix", ["Item"]),

    new Perk("Calm Spirit", "Jake", ["Stealth"]),
    new Perk("Camaraderie", "Steve", ["Hook"]),
    new Perk("Counterforce", "Jill", ["Totem", "Aura"]),

    new Perk("Dance With Me", "Kate", ["Window", "Locker", "Scratch Marks", "Stealth"]),
    new Perk("Dark Sense", "All", ["Generator", "Aura"]),
    new Perk("Dead Hard", "David", ["Exhaustion"]),
    new Perk("Deception", "Elodie", ["Locker", "Distraction", "Scratch Marks", "Pools of Blood", "Stealth"]),
    new Perk("Decisive Strike", "Laurie", ["Hook", "Skill Checks", "Stun", "Obsession"]),
    new Perk("Deja Vu", "All", ["Aura", "Generator", "Item"]),
    new Perk("Deliverance", "Adam", ["Hook"]),
    new Perk("Desperate Measures", "Felix", ["Healing", "Hook"]),
    new Perk("Detective's Hunch", "Tapp", ["Aura", "Generator", "Chest", "Totem", "Item"]),
    new Perk("Distortion", "Jeff", ["Token", "Aura", "Scratch Marks", "Stealth"]),
    new Perk("Diversion", "Adam", ["Terror Radius", "Distraction", "Scratch Marks"]),

    new Perk("Empathy", "Claudette", ["Aura"]),
    new Perk("Fast Track", "Yun-Jin", ["Hook", "Token", "Skill Checks", "Generator"]),
    new Perk("Fixated", "Nancy", ["Movement Speed", "Scratch Marks"]),
    new Perk("Flashbang", "Leon", ["Generator", "Locker", "Item", "Stun"]),
    new Perk("Flip-Flop", "Ash", ["Wiggle speed"]),
    new Perk("For the People", "Zarina", ["Healing", "Obsession"]),
];

function filterPerks() {
    perkList.forEach(perk => {
        if (perk.type.includes("Item" || "Stealth")) {
            console.log(perk.name);
        }
    });
}