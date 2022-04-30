import '../importAll';
import { overMind } from '../main.mjs';
import { createSite } from '../utils';

export function tower() {
    let enemyCreep = getObjectsByPrototype(Creep).find(creep => !creep.my);
    let enemyStructure = getObjectsByPrototype(OwnedStructure).find(s => s.my === false);
    let myTower = getObjectsByPrototype(StructureTower).filter(s => s.my);
    for (let myTowermix of myTower) {
        if (enemyStructure) {
            myTowermix.attack(enemyStructure)
        }
        else if (enemyCreep && enemyCreep.exists) {
            myTowermix.attack(enemyCreep);
        }
    }
}

