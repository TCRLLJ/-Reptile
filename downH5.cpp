#include <cstdio>
#include <cstdlib>
#include <windows.h>
#include <string>
#include <iostream>
#include <set>
#include <vector>
int main() {
    for (int i = 520; i <= 873; i++) {
        system((std::string("node .\\downH5.js ") + std::to_string(i)).c_str());
        // std::cout << (std::string("node .\\1.js ") + std::to_string(i)).c_str();
    }
    // std::set<int> set;
    // std::vector<int> a = {15298, 15242, 15264, 15231, 15202, 15217, 16034, 15423, 15361, 15403, 15347, 15369, 15328, 16034, 15423, 15361, 15403, 15347, 15369, 15328, 17709, 17708, 15554, 17709, 17708, 15554, 17883, 17768, 17736, 17433, 16482, 17883, 17768, 17736, 17433, 16482, 17883, 17768, 17736, 17433, 16482, 18563, 18508, 18513, 18359, 17946, 18563, 18508, 18513, 18359, 17946, 18563, 18508, 18513, 18359, 17946, 18563, 18508, 18513};
    // for(auto &i : a) set.insert(i);
    // for (auto &i : set) printf("'%d',", i);
    return 0;
}