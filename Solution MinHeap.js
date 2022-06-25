
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {

    const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({compare: (x, y) => x - y});

    for (let index = 0; index < heights.length - 1; ++index) {

        let difference = heights[index + 1] - heights[index];
        if (difference <= 0) {
            continue;
        }

        minHeap.enqueue(difference);
        if (minHeap.size() <= ladders) {
            continue;
        }

        bricks -= minHeap.dequeue();
        if (bricks < 0) {
            return index;
        }
    }
    return heights.length - 1;
};
