import skill from "./skill";

function shieldDiaona(config) {
    let eLevel = config.cArgs.skill2;
    let bonus = skill.e.hp[eLevel - 1];
    let s = skill.e.s[eLevel - 1];

    return function (attribute) {
        let hp = attribute.life();
        return (hp * bonus + s) * (1 + attribute.shield);
    }
}

export default {
    name: "diaonaShield",
    func: shieldDiaona,
    needConfig: true,
}