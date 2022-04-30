import '../importAll';
import { overMind } from '../main.mjs';
import { createSite } from '../utils';

export function tower() {
    let workerFirst = getObjectsByPrototype(Creep).find(s => s.type == "workerFirst");
    let enemyCreep = getObjectsByPrototype(Creep).filter(s => s.my === false);
    let enemyStructure = getObjectsByPrototype(OwnedStructure).filter(s => s.my === false);
    let myTower = getObjectsByPrototype(StructureTower).filter(s => s.my);
    //console.log("enemyCreep", enemyCreep)
    //console.log("enemyStructure", enemyStructure)
    for (let myTowermix of myTower) {
        if (enemyStructure.length > 0 && getRange(workerFirst, findClosestByRange(workerFirst, enemyStructure)) < 48) {
            let workerFirstin50Range = findInRange(workerFirst, enemyStructure, 48)
            let workerFirst_workerFirstin50Range_findClosest = findClosestByRange(workerFirst, workerFirstin50Range)
            //console.log("workerFirst_workerFirstin50Range_findClosest", workerFirst_workerFirstin50Range_findClosest)
            myTowermix.attack(workerFirst_workerFirstin50Range_findClosest)
        }
        else if (enemyCreep.length > 0 && getRange(workerFirst, findClosestByRange(workerFirst, enemyCreep)) < 48) {
            let workerFirstin50RangeEnemyCreep = findInRange(workerFirst, enemyCreep, 48)
            let workerFirst_workerFirstin50RangeEnemyCreep_findClosest = findClosestByRange(workerFirst, workerFirstin50RangeEnemyCreep)
            //console.log("workerFirst_workerFirstin50RangeEnemyCreep_findClosest", workerFirst_workerFirstin50RangeEnemyCreep_findClosest)
            myTowermix.attack(workerFirst_workerFirstin50RangeEnemyCreep_findClosest);
        }
    }
}

