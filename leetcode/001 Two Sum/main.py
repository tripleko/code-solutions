class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        numshash = {}
        i = 0

        while i < len(nums):
            sum = target - nums[i]
            if sum in numshash:
                return [i, numshash[sum]]
            numshash[nums[i]] = i
            i += 1
            