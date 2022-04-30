import { overMind } from './main.mjs';
import { worker1Num as worker1Num1 } from './fight1Mode/worker1Num';
import { building as building1 } from './fight1Mode/building';
import { tower as tower1 } from './fight1Mode/tower';
import { spawn as spawn1 } from './fight1Mode/spawn';
import { attacker as attacker1 } from './fight1Mode/attacker';

export function runAction() {
    switch (overMind.fightMode) {
        case 1: run1Mode();
            break;
    }
}

function run1Mode() {
    worker1Num1();
    building1();
    tower1();
    spawn1();
    attacker1();
}
