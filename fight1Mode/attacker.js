import '../importAll';
import { overMind } from '../main.mjs';

export function attacker() {
    let attacker = getObjectsByPrototype(Creep).filter(s => s.type == "attacker");
    let enemyCreep = getObjectsByPrototype(Creep).filter(s => s.my === false);
    let enemyStructure = getObjectsByPrototype(OwnedStructure).filter(s => s.my === false);
    if (attacker.length > 0) {
        for (let attackermix of attacker) {
            //移动逻辑
            if (enemyCreep.length > 0) {
                attackermix.moveTo(findClosestByRange(attackermix, enemyCreep))
            }
            else if (enemyStructure.length > 0) {
                attackermix.moveTo(findClosestByRange(attackermix, enemyStructure))
            }
        }
        for (let attackermix of attacker) {
            //攻击逻辑
            if (enemyCreep.length > 0 && getRange(attackermix, findClosestByRange(attackermix, enemyCreep)) <= 1) {
                attackermix.attack(findClosestByRange(attackermix, enemyCreep))
            } else if (enemyStructure.length > 0 && getRange(attackermix, findClosestByRange(attackermix, enemyStructure)) <= 1) {
                attackermix.attack(findClosestByRange(attackermix, enemyStructure))
            }
        }
    }
}

