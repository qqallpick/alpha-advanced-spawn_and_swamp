import './importAll'

//功能性函数

//安装建筑
//如果pos位置上没有建筑或工地，就安装指定建筑工地
export function createSite(pos, prototype) {
    let mysite = getObjectsByPrototype(ConstructionSite).find(s => s.my && s.x == pos.x && s.y == pos.y);
    let mystructure = getObjectsByPrototype(prototype).find(s => s.X == pos.x && s.y == pos.y);
    if (!mysite && !mystructure) {
        createConstructionSite(pos, prototype);
    }
}

//最低血量
//选择对象数列中血量最低的那个
export function findLowestHits(creeps) {
    let bar = creeps[0];
    for (let i of creeps) {
        if (i.hits < bar.hits) {
            bar = i
        }
    }
    return bar
}

/**
*增加障碍物cost
*@param {*} costmatrix
*@returns
*/
export function setobstacle(costmatrix) {
    let obstaclePrototypes = [
        StructureSpawn,
        StructureExtension,
        StructureTower,
        StructureWall,
    ];
    let obstacleEnemyPrototypes = [StructureRampart];
    let obstacleEnemyPrototypesCreep = [Creep]
    for (const prototype of obstaclePrototypes) {
        let obstacles = getObjectsByPrototype(prototype).filter(
            (p) => p.exists
        );
        for (const obstacle of obstacles) {
            costmatrix.set(obstacle.x, obstacle.y, 255);
        }
    }
    for (const prototype of obstacleEnemyPrototypes) {
        let obstacles = getObjectsByPrototype(prototype).filter(
            (p) => p.exists & !p.my  
        );
        for (const obstacle of obstacles) {
            costmatrix.set(obstacle.x, obstacle.y, 255);
        }

    }
    for (const prototype of obstacleEnemyPrototypesCreep) {
        let obstacles = getObjectsByPrototype(prototype).filter(
            (p) => p.exists & !p.my  //我方单位不算255
        );
        for (const obstacle of obstacles) {
            costmatrix.set(obstacle.x, obstacle.y, 255);
            costmatrix.set(obstacle.x + 1, obstacle.y, 255);
            // costmatrix.set(obstacle.x + 2, obstacle.y, 255);
            costmatrix.set(obstacle.x - 1, obstacle.y, 255);
            // costmatrix.set(obstacle.x - 2, obstacle.y, 255);
            costmatrix.set(obstacle.x + 1, obstacle.y + 1, 255);
            // costmatrix.set(obstacle.x + 2, obstacle.y + 1, 255);
            costmatrix.set(obstacle.x - 1, obstacle.y + 1, 255);
            // costmatrix.set(obstacle.x - 2, obstacle.y + 1, 255);
            // costmatrix.set(obstacle.x + 1, obstacle.y + 2, 255);
            // costmatrix.set(obstacle.x + 2, obstacle.y + 2, 255);
            // costmatrix.set(obstacle.x - 1, obstacle.y + 2, 255);
            // costmatrix.set(obstacle.x - 2, obstacle.y + 2, 255);
            costmatrix.set(obstacle.x + 1, obstacle.y - 1, 255);
            // costmatrix.set(obstacle.x + 2, obstacle.y - 1, 255);
            costmatrix.set(obstacle.x - 1, obstacle.y - 1, 255);
            // costmatrix.set(obstacle.x - 2, obstacle.y - 1, 255);
            // costmatrix.set(obstacle.x + 1, obstacle.y - 2, 255);
            // costmatrix.set(obstacle.x + 2, obstacle.y - 2, 255);
            // costmatrix.set(obstacle.x - 1, obstacle.y - 2, 255);
            // costmatrix.set(obstacle.x - 2, obstacle.y - 2, 255);
            costmatrix.set(obstacle.x, obstacle.y + 1, 255);
            costmatrix.set(obstacle.x, obstacle.y - 1, 255);
            // costmatrix.set(obstacle.x, obstacle.y + 2, 255);
            // costmatrix.set(obstacle.x, obstacle.y - 2, 255);
        }
    }
    return costmatrix;
}

//对象A是否和对象集合B中的对象紧靠
export function isNearto(A, B) {
    let A_B_findClosest = findClosestByRange(A, B)
    if (getRange(A, A_B_findClosest) == 1) {
        return true
    }
    else {
        return false
    }
}

//该函数接收一个数组，返回数组所有元素重复次数最少的
export const getLeastDuplicateItems = (arr = []) => {
    const hash = Object.create(null);
    let keys, min; arr.forEach(el => {
        hash[el] = hash[el] || {
            value: el, count: 0
        };
        hash[el].count++;
    });
    keys = Object.keys(hash);
    keys.sort(function (el, b) {
        return hash[el].count - hash[b].count;
    });
    min = hash[keys[0]].count;
    return keys.filter(el => {
        return hash[el].count === min;
    }).
        map(el => {
            return hash[el].value;
        });
}
