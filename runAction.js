import { overMind } from './main.mjs';
import { spawm as spawm1 } from './fight1Mode/spawm';
import { carry as carry1 } from './fight1Mode/carry';
import { drop as drop1 } from './fight1Mode/drop';
import { work as work1 } from './fight1Mode/work';
import { fight as fight1 } from './fight1Mode/fight';
import { visual as visual1 } from './fight1Mode/visual';

export function runAction() {
    //let mySpawn = getObjectsByPrototype(StructureSpawn).filter(s => s.my)[0];
    switch (overMind.fightMode) {
        case 1: run1Mode();
            break;
    }
}

function run1Mode() {
    // spawm1();
    // carry1();
    // drop1();
    // work1();
    // fight1();
    // visual1();
}
