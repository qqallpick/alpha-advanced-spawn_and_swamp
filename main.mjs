import './importAll';
import { fightMode } from './fightMode';
import { runAction } from './runAction';
import { stats } from './stats';

//创建全局对象，作为总控
//导入代码import { overMind } from '../main.mjs';
export let overMind = {}

export function loop() {
    //选择战术模式
    fightMode();

    //运行战术
    runAction();

    //监控当前状态
    stats();
}
