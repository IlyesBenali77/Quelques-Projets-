export interface Players {
    id: number;
    name: string;
    hp: number;
    mp: number;
    str: number;
    int: number;
    def: number;
    res: number;
    spd: number;
    luck: number;
    race: number;
    class: number;
    rarity: number;
}

export interface Bosses {
    id: number;
    name: string;
    hp: number;
    mp: number;
    str: number;
    int: number;
    def: number;
    res: number;
    spd: number;
    luck: number;
    race: number;
    class: number;
    rarity: number;
}

export interface Classes {
    id: number;
    name: string;
    strengths: [
        number,
        number,
        number,
        number,
    ],
    weaknesses: [
        number,
        number,
    ],
    attack_type: string;
    alignment: string;
    rarity: number,
}

export interface Enemies {
    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class:number,
    rarity: number,
}

export interface Races {
    id: number,
    name: string,
    strength: [
        12,
        13,
        15
    ],
    weakness: [],
    rarity: string,
}

export interface Spells {
    id: number,
    name: string,
    cost: number,
    dmg: number,
    effect: string,
    cooldown: number,
    race: string,
    class: string,
    rarity: number
}

export interface Traps {
    id: number,
    name: string,
    requirement: string,
    rarity: number
}
