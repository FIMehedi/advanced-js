function add() {
    const nums = [...arguments]
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        sum += element;
    }
    return sum;
}
console.log(add(1, 2, 7, 8,));
