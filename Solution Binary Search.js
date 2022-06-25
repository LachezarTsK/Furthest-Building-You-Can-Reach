
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    this.pairs_ClimbIndex = [];
    initializeList_pairs_ClimbIndex(heights);
    return binarySearchForFurthestBuildingThatCanBeReached(heights.length, bricks, ladders);
};

/**
 * @param {number} climb
 * @param {number} index
 */
function PairClimbIndex(climb, index) {
    this.climb = climb;
    this.index = index;
}

/**
 * @param {number} sizeInput
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
function binarySearchForFurthestBuildingThatCanBeReached(sizeInput, bricks, ladders) {
    let lower = 0;
    let upper = sizeInput - 1;
    while (lower < upper) {
        let mid = lower + Math.floor((upper - lower + 1) / 2);
        if (currentIndexCanBeReached(mid, bricks, ladders)) {
            lower = mid;
        } else {
            upper = mid - 1;
        }
    }
    return lower;
}

/**
 * @param {number} index
 * @param {number} bricks
 * @param {number} ladders
 * @return {boolean}
 */
function currentIndexCanBeReached(index, bricks, ladders) {

    for (let i = 0; i < this.pairs_ClimbIndex.length; ++i) {
        if (this.pairs_ClimbIndex[i].index > index) {
            continue;
        }
        if (this.pairs_ClimbIndex[i].climb <= bricks) {
            bricks -= this.pairs_ClimbIndex[i].climb;
        } else if (ladders > 0) {
            --ladders;
        } else {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} heights
 * @return {void}
 */
function  initializeList_pairs_ClimbIndex(heights) {
    for (let i = 0; i < heights.length - 1; ++i) {
        let climb = heights[i + 1] - heights[i];
        if (climb > 0) {
            this.pairs_ClimbIndex.push(new PairClimbIndex(climb, i + 1));
        }
    }
    this.pairs_ClimbIndex.sort((first, second) => first.climb - second.climb);
}
