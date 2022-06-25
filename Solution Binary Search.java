
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {

    private static record PairClimbIndex(int climb, int index) {}
    private List<PairClimbIndex> pairs_ClimbIndex;

    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        initializeList_pairs_ClimbIndex(heights);
        return binarySearchForFurthestBuildingThatCanBeReached(heights.length, bricks, ladders);
    }

    private int binarySearchForFurthestBuildingThatCanBeReached(int sizeInput, int bricks, int ladders) {
        int lower = 0;
        int upper = sizeInput - 1;
        while (lower < upper) {
            int mid = lower + (upper - lower + 1) / 2;
            if (currentIndexCanBeReached(mid, bricks, ladders)) {
                lower = mid;
            } else {
                upper = mid - 1;
            }
        }
        return lower;
    }

    private boolean currentIndexCanBeReached(int index, int bricks, int ladders) {

        for (int i = 0; i < pairs_ClimbIndex.size(); ++i) {
            if (pairs_ClimbIndex.get(i).index > index) {
                continue;
            }
            if (pairs_ClimbIndex.get(i).climb <= bricks) {
                bricks -= pairs_ClimbIndex.get(i).climb;
            } else if (ladders > 0) {
                --ladders;
            } else {
                return false;
            }
        }
        return true;
    }

    private void initializeList_pairs_ClimbIndex(int[] heights) {
        pairs_ClimbIndex = new ArrayList<>();
        for (int i = 0; i < heights.length - 1; ++i) {
            int climb = heights[i + 1] - heights[i];
            if (climb > 0) {
                pairs_ClimbIndex.add(new PairClimbIndex(climb, i + 1));
            }
        }
        Collections.sort(pairs_ClimbIndex, (first, second) -> first.climb - second.climb);
    }
}
