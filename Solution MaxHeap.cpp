
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        
        priority_queue<int> maxHeap;

        for (int index = 0; index < heights.size() - 1; ++index) {

            int difference = heights[index + 1] - heights[index];
            if (difference <= 0) {
                continue;
            }

            bricks -= difference;
            maxHeap.push(difference);
            if (bricks < 0 && ladders == 0) {
                return index;
            }

            if (bricks < 0) {
                bricks += maxHeap.top();
                maxHeap.pop();
                --ladders;
            }
        }
        return heights.size() - 1;
    }
};
