
import java.util.PriorityQueue;

public class Solution {

    public int furthestBuilding(int[] heights, int bricks, int ladders) {

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int index = 0; index < heights.length - 1; ++index) {

            int difference = heights[index + 1] - heights[index];
            if (difference <= 0) {
                continue;
            }

            minHeap.add(difference);
            if (minHeap.size() <= ladders) {
                continue;
            }

            bricks -= minHeap.poll();
            if (bricks < 0) {
                return index;
            }
        }

        return heights.length - 1;
    }
}
