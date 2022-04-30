import '../importAll';
import { overMind } from '../main.mjs';

export function worker1Num() {
    let myWorker = getObjectsByPrototype(Creep).find(s => s.my);
    let workerFirst = getObjectsByPrototype(Creep).find(s => s.type == "workerFirst");
    let SourceMark = getObjectsByPrototype(Source).filter(i => i.x > 44 && i.x < 55 && i.y > 44 && i.y < 55)
    //console.log("myMorker", myWorker)
    //console.log("workerFirst", workerFirst)
    //console.log("SourceMark", SourceMark)

    //初始化第一个农民
    if (!workerFirst) {
        myWorker.type = "workerFirst"
        console.log('SCV初始化完成，随时准备出动！')
    }

    //初始化绑定矿点
    if (!overMind.bindSource && myWorker) {
        let aaa = findClosestByRange(myWorker, SourceMark)
        //console.log(aaa)
        overMind.bindSource_x = aaa.x
        overMind.bindSource_y = aaa.y
        overMind.bindSource = true
        console.log('矿点绑定完成！')
    }

    if (workerFirst) {
        // //建造逻辑
        // if (worker.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        //     let worker_resource_findClosest = findClosestByRange(worker, resource);
        //     if (worker.harvest(worker_resource_findClosest, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //         worker.moveTo(worker_resource_findClosest);
        //     }
        // } else {
        //     let worker_myConstructionSite_findClosest = findClosestByRange(worker, myConstructionSite);
        //     if (worker.build(worker_myConstructionSite_findClosest) == ERR_NOT_IN_RANGE) {
        //         worker.moveTo(worker_myConstructionSite_findClosest);
        //     }
        // }

        // else if (myConstructionSite.length == 0) {
        //     if (worker.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        //         if (worker.withdraw(mySpawn_Container_findClosest, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             worker.moveTo(mySpawn_Container_findClosest);
        //         }
        //     } else {
        //         if (worker.transfer(mySpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             worker.moveTo(mySpawn);
        //         }
        //     }

        // }

        // if (getTicks() > 300) {
        //     if (myConstructionSite.length > 0) {
        //         //建造逻辑
        //         if (!worker.store[RESOURCE_ENERGY] > 0) {
        //             let resource = getObjectsByPrototype(Resource).filter(i => i.resourceType == RESOURCE_ENERGY)
        //             let worker_resource_findClosest = findClosestByRange(worker, resource);
        //             let mySpawn_Container_findClosest = findClosestByRange(mySpawn, container);
        //             let worker_Container_findClosest = findClosestByRange(worker, container);
        //             if (worker.pickup(worker_resource_findClosest, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //                 worker.moveTo(worker_resource_findClosest);
        //             }
        //             else if (worker.withdraw(worker_Container_findClosest, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //                 worker.moveTo(worker_Container_findClosest);
        //             }
        //         } else {
        //             let worker_myConstructionSite_findClosest = findClosestByRange(worker, myConstructionSite);
        //             if (worker.build(worker_myConstructionSite_findClosest) == ERR_NOT_IN_RANGE) {
        //                 worker.moveTo(worker_myConstructionSite_findClosest);
        //             }
        //         }
        //     }
        //     else if (myConstructionSite.length == 0) {
        //         if (worker.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        //             if (worker.withdraw(mySpawn_Container_findClosest, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //                 worker.moveTo(mySpawn_Container_findClosest);
        //             }
        //         } else {
        //             if (worker.transfer(mySpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //                 worker.moveTo(mySpawn);
        //             }
        //         }
        //     }
        // }
    }
}

