import './importAll'
import { overMind } from './main.mjs';

export function stats() {
    switch (overMind.fightMode) {
        case 1: run1Mode();
            break;
    }
}

function run1Mode() {
    //负责显示状态，具体实现在各个模块里面
    console.log("马作的卢飞快")
    console.log("游戏时间：", getTicks(), "ticks")
    if (overMind.bindSource == true) {
        console.log("绑定矿点：", overMind.bindSource_x, ",", overMind.bindSource_y)
        console.log("矿点侧边：", overMind.bindSource_pos)
    }
}