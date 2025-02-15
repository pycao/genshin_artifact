import skill from "./skill";
import reaction from "@/elemental_reaction/reaction_bonus";

let ampFunc = reaction.amp;

function f(config) {
    let baseAtk = config.character.baseAtk + config.weapon.baseAtk;
    let eLevel = config.cArgs.skill2;
    let aLevel = config.cArgs.skill1;
    let atkInc = skill.e.hp[eLevel - 1];

    let aT = skill.a.dmg3[aLevel - 1];
    let bT = skill.b.dmg[aLevel - 1];

    let hasTalent2 = config.character.hasTalent2;

    let hpBelow50 = config.tArgs.hpBelow50;
    let pyroRate = config.tArgs.pyroRate;
    let evaporate = config.tArgs.evaporate;
    let melt = config.tArgs.melt;
    let mode = config.tArgs.mode;
    let lw4 = config.tArgs.lw4;
    let skillType = config.tArgs.skill;
    let normal = 1 - evaporate - melt;
    let bFreq = config.tArgs.bFreq;
    let aFreq = 1 - bFreq;

    let talentBonus = (hasTalent2 && hpBelow50) ? 0.33 : 0;

    if (mode === "expect") {
        return function (attribute, context) {
            let isCW4 = (context.artifactSet.crimsonWitch || 0) >= 4;
            let isLW4 = (context.artifactSet.lavaWalker || 0) >= 4;

            let atkBonus = attribute.life() * atkInc;
            atkBonus = Math.min(atkBonus, 4 * baseAtk);

            let atk = attribute.attack() + atkBonus;
            let commonBonus = attribute.bonus + attribute.fireBonus + talentBonus;

            let em = attribute.elementalMastery;
            let amp = ampFunc(em);
            if (isCW4) {
                commonBonus += 0.075;
                amp += 0.15;
            }
            if (isLW4) {
                commonBonus += pyroRate * 0.35;
            }

            let crit = Math.min(1, attribute.critical);

            let a = atk * (1 + commonBonus + attribute.aBonus) * aFreq * aT;
            let b = atk * (1 + commonBonus + attribute.bBonus) * bFreq * bT;

            
            return (a + b) * (1 + crit * attribute.criticalDamage) * (normal + (evaporate * 1.5 + melt * 2) * (1 + amp));
        };
    } else if (mode === "max") {
        return function (attribute, context) {
            let isLW4 = (context.artifactSet.lavaWalker || 0) >= 4;

            let atkBonus = attribute.life() * atkInc;
            atkBonus = Math.min(atkBonus, 4 * baseAtk);

            let atk = attribute.attack() + atkBonus;
            let commonBonus = attribute.bonus + attribute.fireBonus + talentBonus + attribute[skillType + "Bonus"];
            let otherBonus = isLW4 && lw4 ? 0.35 : 0;

            return atk * (1 + commonBonus + otherBonus) * (1 + attribute.criticalDamage);
        };
    } else if (mode === "max-reaction") {
        return function (attribute, context) {
            let isCW4 = (context.artifactSet.crimsonWitch || 0) >= 4;
            let isLW4 = (context.artifactSet.lavaWalker || 0) >= 4;

            let atkBonus = attribute.life() * atkInc;
            atkBonus = Math.min(atkBonus, 4 * baseAtk);

            let atk = attribute.attack() + atkBonus;
            let commonBonus = attribute.bonus + attribute.fireBonus + talentBonus + attribute[skillType + "Bonus"];

            let em = attribute.elementalMastery;
            let amp = ampFunc(em);
            if (isCW4) {
                commonBonus += 0.075;
                amp += 0.15;
            }
            if (isLW4 && lw4) {
                commonBonus += 0.35;
            }
            
            return atk * (1 + commonBonus) * (1 + attribute.criticalDamage) * (1 + amp);
        };
    }
}

export default {
    name: "hutaoE",
    func: f,
    needConfig: true,
    needContext: true,
}