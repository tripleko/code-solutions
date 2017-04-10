/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let numshash = {};

    for(let i = 0; i < nums.length; i++) {
        let sum = target - nums[i];

        if(numshash.hasOwnProperty(String(sum))) {
            return[i, numshash[String(sum)]];
        }
        
        numshash[String(nums[i])] = i;
    }
};