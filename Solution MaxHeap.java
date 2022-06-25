
import java.util.PriorityQueue;

public class Solution {

    public int furthestBuilding(int[] heights, int bricks, int ladders) {

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((x, y) -> y - x);

        for (int index = 0; index < heights.length - 1; ++index) {

            int difference = heights[index + 1] - heights[index];
            if (difference <= 0) {
                continue;
            }

            bricks -= difference;
            maxHeap.add(difference);
            if (bricks < 0 && ladders == 0) {
                return index;
            }

            if (bricks < 0) {
                bricks += maxHeap.poll();
                --ladders;
            }
        }
        return heights.length - 1;
    }
}
