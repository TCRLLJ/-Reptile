#include <cstdio>
#include <cstdlib>
#include <string>
#include <iostream>
#include <set>
#include <vector>

int main() {
    std::string s;
    while(std::getline(std::cin, s)) {
        std::cout << s.substr(0, s.find_first_of('|')) << std::endl;
        std::cout << s.substr(s.find_first_of('|') + 1, s.length() - s.find_first_of('|') - 1) << "\n";
        
        std::string oldName = "./pdf/" + s.substr(0, s.find_first_of('|')) + "_2.pdf";
        std::string newName = "./pdf/" + s.substr(s.find_first_of('|') + 1, s.length() - s.find_first_of('|') - 1) + ".pdf"; 
        if (!rename(oldName.c_str(), newName.c_str())) {
            std::cout << "rename success "<< std::endl;
        } else {
            std::cout << "rename error "<< std::endl;
        }
    }
}