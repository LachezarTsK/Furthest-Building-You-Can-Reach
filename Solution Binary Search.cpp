
#include <vector>
using namespace std;

class Solution {

    struct PairClimbIndex {
        int climb{};
        int index{};
        PairClimbIndex(int climb, int index) : climb {climb}, index {index} {}
    };
    vector<PairClimbIndex> pairs_ClimbIndex;

public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        initializeList_pairs_ClimbIndex(heights);
        return binarySearchForFurthestBuildingThatCanBeReached(heights.size(), bricks, ladders);
    }

private:
    int binarySearchForFurthestBuildingThatCanBeReached(int sizeInput, int bricks, int ladders) {
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

    bool currentIndexCanBeReached(int index, int bricks, int ladders) {

        for (int i = 0; i < pairs_ClimbIndex.size(); ++i) {
            if (pairs_ClimbIndex[i].index > index) {
                continue;
            }
            if (pairs_ClimbIndex[i].climb <= bricks) {
                bricks -= pairs_ClimbIndex[i].climb;
            } else if (ladders > 0) {
                --ladders;
            } else {
                return false;
            }
        }
        return true;
    }

    void initializeList_pairs_ClimbIndex(const vector<int>& heights) {
        for (int i = 0; i < heights.size() - 1; ++i) {
            int climb = heights[i + 1] - heights[i];
            if (climb > 0) {
                pairs_ClimbIndex.push_back(PairClimbIndex(climb, i + 1));
            }
        }

        const auto smallerClimbsFirst = [](const PairClimbIndex& x, const PairClimbIndex & y) {
            return x.climb < y.climb;
        };
        sort(pairs_ClimbIndex.begin(), pairs_ClimbIndex.end(), smallerClimbsFirst);
    }
};
