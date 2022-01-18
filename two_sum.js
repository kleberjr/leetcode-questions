var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let soma = nums[i] + nums[j];

            if (soma === target) {
                return [i, j];
            }
        }
    }
};

const result = twoSum([2, 7, 11, 15], 9); 
console.log(result);
