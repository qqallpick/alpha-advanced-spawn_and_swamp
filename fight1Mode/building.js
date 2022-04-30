import '../importAll';
import { overMind } from '../main.mjs';
import { createSite } from '../utils';

export function building() {
    let workerFirst = getObjectsByPrototype(Creep).find(s => s.type == "workerFirst");
    let sourceBind = getObjectsByPrototype(Source).find(i => i.x == overMind.bindSource_x && i.y == overMind.bindSource_y)
    //console.log("workerFirst", workerFirst)
    //console.log("sourceBind", sourceBind)

    createSite();


}

