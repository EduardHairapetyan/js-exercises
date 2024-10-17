//number of uniqe elements

let arr = [];

for (let i = 0; i < 5; ++i) {
    arr[i] = []; 
    for (let j = 0; j < 10; ++j) {
        arr[i][j] = Math.floor(Math.random() * 100) + 1; 
    }
}

let counts = new Array(101).fill(0); 

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        counts[arr[i][j]]++; 
    }
}

let uniqueNumbers = 0;
for (let number = 1; number < counts.length; number++) {
    if (counts[number] == 1) {
        uniqueNumbers++; 
    }
}

console.log("Count of unique numbers:", uniqueNumbers);
