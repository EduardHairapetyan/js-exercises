thirdLargest = (arr) => {
    if (arr.length < 3) throw new Error("Array must have at least 3 elements");
    sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted[2];
  };
  
  console.log(thirdLargest([10, 20, 30, 40, 50,60,70])); // Outputs 30