import { overMind } from './main.mjs';
import { worker1Num as worker1Num1 } from './fight1Mode/worker1Num';
import { building as building1 } from './fight1Mode/building';

export function runAction() {
    switch (overMind.fightMode) {
        case 1: run1Mode();
            break;
    }
}

function run1Mode() {
    worker1Num1();
   // building1();
}
