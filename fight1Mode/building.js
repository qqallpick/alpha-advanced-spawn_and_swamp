import '../importAll';
import { overMind } from '../main.mjs';
import { createSite } from '../utils';

export function building() {
    //let workerFirst = getObjectsByPrototype(Creep).find(s => s.type == "workerFirst");
    let sourceBind = getObjectsByPrototype(Source).find(i => i.x == overMind.bindSource_x && i.y == overMind.bindSource_y)
    //console.log("workerFirst", workerFirst)
    //console.log("sourceBind", sourceBind)

    //预设建筑点
    //绑定矿点在左侧的情况
    //console.log("sourceBind && overMind.bindSource_pos == '左侧'", sourceBind && overMind.bindSource_pos == "左侧")
    if (sourceBind && overMind.bindSource_pos == "左侧") {
        createSite({ x: sourceBind.x - 2, y: sourceBind.y - 1 }, StructureTower);
        createSite({ x: sourceBind.x - 2, y: sourceBind.y + 1 }, StructureTower);
        createSite({ x: sourceBind.x - 1, y: sourceBind.y - 1 }, StructureSpawn);
        // createSite({ x: sourceBind.x - 2, y: sourceBind.y + 1 }, StructureTower);
        // createSite({ x: sourceBind.x - 2, y: sourceBind.y - 1 }, StructureTower);
        // createSite({ x: sourceBind.x - 2, y: sourceBind.y }, StructureTower);
    } else if (sourceBind && overMind.bindSource_pos == "右侧") {
        createSite({ x: sourceBind.x + 2, y: sourceBind.y - 1 }, StructureTower);
        createSite({ x: sourceBind.x + 2, y: sourceBind.y + 1 }, StructureTower);
        createSite({ x: sourceBind.x - 1, y: sourceBind.y - 1 }, StructureSpawn);
        // createSite({ x: sourceBind.x + 2, y: sourceBind.y + 1 }, StructureTower);
        // createSite({ x: sourceBind.x + 2, y: sourceBind.y - 1 }, StructureTower);
        // createSite({ x: sourceBind.x + 2, y: sourceBind.y }, StructureTower);
    }
}

