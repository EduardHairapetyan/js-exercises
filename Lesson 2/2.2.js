//calculate sum of perfect numers in array

function isPerfectNumber(number) {
    let sum=0;
    for (var i=1;i<=number/2;++i)
    {
        if (number%i==0)
        {
            sum+=i;
        }
    }
    return sum==number;
}

let arr = []
for (var i=0;i<10;++i){
    arr[i] = Math.floor(Math.random() * 100) + 1;
}

sumOfPerfects=0;

for (let i in arr){
    sumOfPerfects+=isPerfectNumber(i)?i:0;
}

console.log("Sum of perfect numbers:", sumOfPerfects);