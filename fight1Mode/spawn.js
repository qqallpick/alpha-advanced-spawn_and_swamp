import '../importAll';
import { overMind } from '../main.mjs';
import { createSite } from '../utils';

export function spawn() {
    let mySpawn = getObjectsByPrototype(StructureSpawn).find(s => s.my);
    if (mySpawn) {
        let attacker = getObjectsByPrototype(Creep).filter(s => s.type == "attacker");
        const body_attacker = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK];

        //生产单位的逻辑
        if (attacker.length < 100) {
            let attackermix = mySpawn.spawnCreep(body_attacker).object
            if (attackermix) {
                attackermix.type = "attacker"
                attackermix.num = attacker.length
            }
        }
    }
}

