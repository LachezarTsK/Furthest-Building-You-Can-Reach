
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        const auto smallerOnTop = [](int x, int y) {return y < x;};
        priority_queue<int, vector<int>, decltype(smallerOnTop) > minHeap(smallerOnTop);

        for (int index = 0; index < heights.size() - 1; ++index) {

            int difference = heights[index + 1] - heights[index];
            if (difference <= 0) {
                continue;
            }

            minHeap.push(difference);
            if (minHeap.size() <= ladders) {
                continue;
            }

            bricks -= minHeap.top();
            minHeap.pop();
            if (bricks < 0) {
                return index;
            }
        }

        return heights.size() - 1;
    }
};
