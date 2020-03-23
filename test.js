let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Others = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz[i] = console.log(i)
     } else if (i % 3 === 0) {
         Fizz[i] = console.log(i)
     } else if (i % 5 === 0) {
        Buzz[i] = console.log(i)
     } else {
         Others[i] = console.log(i)
    }
}

console.log("Total Number of Fizz = "      + Fizz .length);
console.log("Total Number of Others = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Others = "    + Others.length);
console.log("Total Number of Others = "    + Others.length);

var chunk = 50;
var ID = new Array(100);
        for (var i = 0; i < 100; i++) {
            ID[i] = i + 1;
        }
        
        console.log("Employees' ID:" +ID);

var groupA =  ID.slice(0, chunk);
var groupB = ID.slice(chunk, chunk + ID.length); 
console.log("Group A = "      + groupA);
console.log("Group B = "      + groupB);