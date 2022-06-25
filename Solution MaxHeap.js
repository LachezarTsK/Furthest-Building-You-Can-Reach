
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {

    const {MaxPriorityQueue} = require('@datastructures-js/priority-queue');
    const maxHeap = new MaxPriorityQueue({compare: (x, y) => y - x});

    for (let index = 0; index < heights.length - 1; ++index) {

        let difference = heights[index + 1] - heights[index];
        if (difference <= 0) {
            continue;
        }

        bricks -= difference;
        maxHeap.enqueue(difference);
        if (bricks < 0 && ladders === 0) {
            return index;
        }

        if (bricks < 0) {
            bricks += maxHeap.dequeue();
            --ladders;
        }
    }
    return heights.length - 1;
};
