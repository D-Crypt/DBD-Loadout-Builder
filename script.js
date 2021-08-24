class Perk {
    constructor(name, character, type) {
        this.name = name;
        this.character = character;
        this.type = type;
    }
}

const survivorPerks = [
    new Perk("Ace in the Hole", "Ace", ["Item", "Chest", "Add-on", "Luck"]),
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
    new Perk("Borrowed Time", "Bill", ["Unhook", "Protection", "Endurance"]),
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

    new Perk("Head On", "Jane", ["Locker", "Stun", "Exhaustion"]),
    new Perk("Hope", "All", ["Movement speed"]),

    new Perk("Inner Strength", "Nancy", ["Totem", "Healing", "Locker"]),
    new Perk("Iron Will", "Jake", ["Stealth"]),

    new Perk("Kindred", "All", ["Aura", "Hook"]),

    new Perk("Leader", "Dwight", ["Healing", "Sabotage", "Unhook", "Cleanse", "Opening", "Unlocking"]),
    new Perk("Left Behind", "Bill", ["Aura", "Hatch"]),
    new Perk("Lightweight", "All", ["Scratch Marks", "Stealth"]),
    new Perk("Lithe", "Feng", ["Movement speed", "Exhaustion"]),
    new Perk("Lucky Break", "Yui", ["Injured", "Bleeding", "Scratch Marks", "Stealth"]),

    new Perk("Mettle of Man", "Ash", ["Protection", "Endurance", "Aura"]),

    new Perk("No Mither", "David", ["Bleeding", "Stealth"]),
    new Perk("No One Left Behind", "All", ["Exit Gate", "Unhook", "Healing", "Aura", "Bloodpoints"]),

    new Perk("Object of Obsession", "Laurie", ["Aura", "Repair", "Healing", "Cleanse", "Obsession"]),
    new Perk("Off the Record", "Zarina", ["Unhook", "Aura", "Grunts of Pain", "Stealth"]),
    new Perk("Open-Handed", "Ace", ["Aura"]),

    new Perk("Pharmacy", "Quentin", ["Unlocking", "Chest", "Item", "Stealth"]),
    new Perk("Plunderer's Instinct", "All", ["Aura", "Chest", "Items", "Luck"]),
    new Perk("Poised", "Jane", ["Generator", "Scratch Marks", "Stealth"]),
    new Perk("Power Struggle", "Elodie", ["Wiggling", "Pallet", "Stun"]),
    new Perk("Premonition", "All", ["Detection"]),
    new Perk("Prove Thyself", "Dwight", ["Repair", "Bloodpoints"]),

    new Perk("Quick & Quiet", "Meg", ["Rushing", "Windows", "Lockers", "Stealth"]),

    new Perk("Red Herring", "Zarina", ["Generator", "Aura", "Locker", "Distraction"]),
    new Perk("Repressed Alliance", "Cheryl", ["Generator", "Aura"]),
    new Perk("Resilience", "All", ["Injured", "Repair", "Healing", "Sabotage", "Unhook", "Vault", "Cleanse", "Open", "Unlock"]),
    new Perk("Resurgence", "Jill", ["Unhook", "Healing"]),
    new Perk("Rookie Spirit", "Leon", ["Generator", "Skill Checks", "Aura"]),

    new Perk("Saboteur", "Jake", ["Aura", "Hook", "Sabotage"]),
    new Perk("Second Wind", "Steve", ["Healing", "Broken"]),
    new Perk("Self-Care", "Claudette", ["Healing"]),
    new Perk("Self-Preservation", "Yun-Jin", ["Scratch Marks", "Grunts of Pain", "Bleeding", "Stealth"]),
    new Perk("Slippery Meat", "All", ["Unhook"]),
    new Perk("Small Game", "All", ["Detection", "Totem", "Token"]),
    new Perk("Smash Hit", "Yun-Jin", ["Stun", "Pallet", "Movement Speed", "Exhaustion"]),
    new Perk("Sole Survivor", "Laurie", ["Aura", "Token", "Stealth", "Obsession"]),
    new Perk("Solidarity", "Jane", ["Injured", "Healing", "Item"]),
    new Perk("Soul Guard", "Cheryl", ["Dying State", "Endurance", "Protection", "Cursed"]),
    new Perk("Spine Chill", "All", ["Detection", "Skill Checks", "Action Speeds", "Repair", "Healing", "Sabotage", "Unhook", "Vault", "Cleanse", "Open", "Unlock"]),
    new Perk("Sprint Burst", "Meg", ["Movement speed", "Exhaustion"]),
    new Perk("Stake Out", "Tapp", ["Terror Radius", "Token", "Skill Checks"]),
    new Perk("Streetwise", "Nea", ["Item"]),

    new Perk("Technician", "Feng", ["Skill Checks", "Repair", "Generator", "Stealth"]),
    new Perk("Tenacity", "Tapp", ["Movement speed", "Recover"]),
    new Perk("This Is Not Happening", "All", ["Injured", "Skill Checks", "Repair", "Healing", "Sabotage"]),

    new Perk("Up the Ante", "Ace", ["Token", "Luck"]),
    new Perk("Unbreakable", "Bill", ["Recover", "Dying State"]),
    new Perk("Urban Evasion", "Nea", ["Movement speed", "Stealth"]),

    new Perk("Vigil", "Quentin", ["Blindness", "Exhaustion", "Haemorrhage", "Hindered"]),
    new Perk("Visionary", "Felix", ["Aura", "Generator"]),

    new Perk("Wake Up!", "Quentin", ["Aura", "Generator", "Exit Gate"]),
    new Perk("We'll Make It", "All", ["Healing", "Action Speed"]),
    new Perk("We're Gonna Live Forever", "David", ["Protection", "Healing", "Action Speed", "Token", "Unhook", "Bloodpoints"]),
    new Perk("Windows of Opportunity", "Kate", ["Aura", "Wall", "Pallet", "Window"])
];

function filterPerks(perkList, perkTypes) {
    perkList.forEach(perk => {
        if (perk.type.includes("Stealth") && perk.type.includes("Chest")) {
            console.log(perk.name);
        }
    });
}

function totalPerks(perkList) {
    return perkList.length;
}

filterPerks(survivorPerks);