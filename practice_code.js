// ======================== remove node_module from project cmd ===============================

  Remove node_module from project CMD - npx rimraf node_modules



//===============================   Output of these ======================

function foo() {
  let a = b = 0;
  a++;
  return a;
}
 
foo(); 
typeof a; // => ??? undefined , we can't use a coz it is declared int function block
typeof b; // => ??? number // this is not declared with let only refernce with a so thats why it is considered as global varibale and then it prints type number 



const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1); // 5
}
 
console.log(numbers); // => ??? [5] 



let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100); // 3 , coz i is declared outside the loop and it is consider as clouser
}



var x = 21;
var demo = function () {
  console.log(x);
  var x = 20;   // coz it will defined with value after consoling
};
demo();   // output is undefined



let x = 21;
var demo = function () {
  console.log(x);
  let x = 20;   // coz it will initialize with value after consoling and let does not hoisted
};
demo();   // output is initialize error


//========================== Rest and Spread Operator ==========================


1. Rest Operator(...):

The rest operator collects multiple elements and combines them into an array or object.

  ex -

  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

console.log(sum(1, 2, 3, 4));


const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30, 40]

In this case, rest collects the remaining elements of the array into a new array[20, 30, 40].

  Ex - 3
const obj = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = obj;

console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }

Explanation: The rest operator ...rest gathers the remaining properties c and d into a new object rest.
Key Points:
In arrays, the rest operator collects elements into an array.
In objects, the rest operator collects remaining properties into a new object.
  So,

  2. Spread Operator(...):

The spread operator takes elements from an array, object, or iterable and spreads them into individual elements.It's typically used for copying arrays or objects, merging arrays or objects, and passing arrays as arguments to functions.

Ex - 1 - 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

Explanation: The spread operator(...) is used to unpack elements from arr1 and arr2, combining them into one array combined.


  Ex - 2 - 
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }








// ==================== Floating point presion error ===================

Floating - point precision in JavaScript refers to how numbers with decimal points(known as floating - point numbers) are stored and handled.JavaScript follows the IEEE 754 standard for representing floating - point numbers, which means numbers are stored in a binary format that can lead to precision errors, especially when dealing with very small or very large numbers.

Why Floating - Point Precision Errors Occur:
Floating - point numbers are stored as binary fractions.Some decimal fractions, like 0.1 and 0.2, cannot be precisely represented in binary, leading to rounding errors.
For example, when you add 0.1 and 0.2, the actual result in binary is something like 0.30000000000000004, not exactly 0.3.

  console.log((0.6 + 0.2) === 0.8)  // 0.8 , true
console.log((0.3 + 0.2) === 0.5)  // 0.5 , true Plus ke case me sab thik chalega 
console.log((0.1 + 0.2))  // 0.30000000000000004 ,  keval 0.1+0.2 me aise number aaenge , for round we can use toFixed((0.1 + 0.2))

console.log((0.1 + 0.2).toFixed(2))  // 0.30 ,  (0.1 + 0.2).toFixed(1) - 0.3

console.log((0.6 - 0.2)) // 0.39999999999999997
console.log((0.4 - 0.1)) // 0.30000000000000004   , Minus me aise hi number aaenge

console.log((0.1 + 0.2) == 0.3)   // false , coz  (0.1 + 0.2), 0.1+0.2 this will print 0.30000000000000004
console.log((0.1 + 0.2) == (0.4 - 0.1))  // true

// ======== convert these strings to numbers without unsing any javascript function ============================

const str1 = '247';
const num1 = +str1;

const str2 = '-247';
const num2 = -+str2;

const str3 = '247.19';
const num3 = (+(str3.replace('.', '').replace(/0+$/, ''))) / 100

const str4 = '-247.19';
const num4 = -(+(str3.replace('.', '').replace(/0+$/, ''))) / 100

console.log(num1); // 247
console.log(num2); // -247
console.log(num3); // 247.19
console.log(num4); // -247.19


// ===================== Output of this code =============================
//1.

console.log(a);   // undefined
console.log(b);   // reference error
var a = b = 5;


//2.

var a = 5;
console.log(a++);     // 5 The postfix increment operator (a++) increments the value of 'a' by 1, but returns the original value of 'a' (5) for the console.log statement.

console.log(++a);       //  7  The prefix increment operator (++a) increments the value of 'a' by 1 and returns the new value of 'a' (6) for the console.log statement.

console.log(a);   // The value of 'a' is now 7, and this is output by the console.log statement.



//3.
console.log(1 < 2 < 3);   // true
console.log(3 > 2 > 1);   // false


//4. 

for (var i = 1; i <= 3; i++) {           // 4,4,4
  setTimeout(() => {
    console.log(i);
  }, 1000);
}



let array1 = [1, 2, 3, 4, 4, 4];
let newarr = [];
let duplicate = [];

for (let i = 0; i < array1.length; i++) {
  // first sol:
  let tt = newarr.includes(array1[i])
  if (!tt) {
    newarr.push(array1[i]);
  }

  // sec sol:   
  let checkVAl = newarr.find((ab) => ab == array1[i])
  if (!checkVAl) {
    newarr.push(array1[i]);

  } else {
    duplicate.push(array1[i])
  }

}

// third sol: 
let thirdVal = newarr.filter((value, index) => arr.indexOf(value) === index)
let duplicateVal = newarr.filter((value, index) => arr.indexOf(value) !== index)

console.log(newarr)
console.log(duplicate)

// ============== list 10 fabonacci no. =======================


Formally, the Fibonacci sequence can be defined as: to find the current index value we have to get the pervious index val arr(n - 1) and  previous of previous value  arr(n - 2).then sum of these index value

current index value = arr(n - 1) + arr(n - 2)

F(0) = 0
F(1) = 1
F(n) = F(n - 1) + F(n - 2) for n > 1

function fibonacciSeries(length) {
    let series = [];
    if (length >= 1) {
      series.push(0);
    }
    if (length >= 2) {
      series.push(1);
    }
    for (let i = 2; i < length; i++) {
      console.log("hh", series[i - 1] + series[i - 2])
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }

// Example usage:
let length = 10; // Number of Fibonacci numbers to generate
let fibonacciArray = fibonacciSeries(length);
console.log(fibonacciArray);


//===================== find the non repeating element =======================

function nonRepeatingElements(arr) {
  let frequency = {};

  // Count occurrences of each element
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  console.log(frequency)

  // Collect elements that appear only once
  let result = [];
  for (let num of arr) {
    if (frequency[num] === 1) {
      result.push(num);
    }
  }

  return result;
}

let arr = [5, 4, 5, 4, 6, 7];
console.log("Non-repeating elements:", nonRepeatingElements(arr));

//============================================================================================

//==================== find the peak element from the array based on adjacecnt elements=============



function findPeakElement(arr) {
  let peaks = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the element is a peak
    if ((i === 0 || arr[i] > arr[i - 1]) && (i === arr.length - 1 || arr[i] > arr[i + 1])) {
      peaks.push(arr[i]);
    }
  }

  return peaks;
}

let arr = [5, 2, 4, 7, 12, 2, 6, 3];
console.log("Peak elements:", findPeakElement(arr));
//============================= find the peak element from the array based on adjacecnt elements=======



// ================= find the missing no. and add in place of 0 ==============================

let arr = [6, 1, 8, 0, 4, 5, 3, 7, 2, 10]; // The missing number should be 9

function findMissingNo(arr) {
  let n = arr.length; // Total number of elements should include the missing number
  let expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers

  let actualSum = arr.reduce((a, b) => a + b, 0); // Sum of the array elements

  let missingNo = expectedSum - actualSum; // The missing number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = missingNo;
      break;
    }
  }
  return arr;
}

console.log(findMissingNo(arr));

/// ================================================================================

// =================== Reverse array  start  =============== //////

const arr = [1, 2, 3, 4, 5, 6];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr);

// ====================== revesre array end ===========////

//==================== if conditions start  ==================///

if (1 < 2 < 3) {
  console.log("true"); /// true   1 < 2 which means = 1 and 1 id less than 3 so it is true
} else {
  console.log("true123");
}

if (1 > 2 < 3) {
  console.log("true");  // true  1 > 2  condition false = 0  and 0 is less than 3 so it is true
} else {
  console.log("true123");
}

if (1 > 2 > 3) {
  console.log("true");
} else {
  console.log("true123"); /// true123   1 > 2  condition false = 0  and 0 is not greater than 3 so it is false
}

//==================== if conditions end ==================    ///

// ================== Currying Start ====================

function add(a) {
  var a = "X-" + a;
  return function (b) {
    var b = "B -" + a
    return function (c) {
      var c = "C -" + b;
      return c;
    };
  };
}

console.log(add(1)(2)(3));  // output - "C -B -X-1" , but when we use let to declare a, b,c then it gives an redeclaration error



// ================== Currying End ====================


// ============= Closure start ================

function new_close() {
  let obj = { name: "aarju", age: 45 }
  return function () {
    console.log("name is: ", obj.name)
  }
}

let newfunc = new_close();
newfunc();


function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Logs 1
counter(); // Logs 2
counter(); // Logs 3

Explanation -

  The createCounter function defines a variable count and returns an inner function that increments and logs count.
Even though count is defined in the lexical scope of createCounter, the returned inner function retains access to count through a closure, allowing it to increment and log count each time it is called.


1. Lexical scope in JavaScript means that the scope of a variable is determined by its location in the source code.

2. Global Scope: Variables declared outside any function are globally accessible.

3. Function Scope: Variables declared within a function are accessible only within that function.

4. Block Scope: Variables declared with let and const inside a block are accessible only within that block.

  Closures: Functions retain access to their lexical scope even when executed outside that scope.



// ============= End ======================



for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0,1,2 ,,, Using let in the original code creates a new lexical scope for each iteration of the loop, and each setTimeout callback captures its own value of i from its respective iteration. Therefore, you get the expected output of 0, 1, and 2.


}

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3,3,3   ,, . In the case of var, there is only one variable i that is shared among all iterations of the loop, and by the time the setTimeout callbacks are executed, the loop has already completed, and i is left with the final value of 3.
}



//================== sorting an array =======
let arr2 = [1, 2, 3, 4, 5, 6];

function customSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(customSort(arr1)); // Output: [1, 2, 3, 4, 5, 6]


/// ============== Find Prime Numbers that is only devided by 1 and itself ======================

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimeNumbers(arr) {
  const primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  return primeNumbers;
}

const randomArray = [4, 6, 7, 2, 8, 1];
const primeNumbersInArray = findPrimeNumbers(randomArray);
console.log("Prime numbers in the array:", primeNumbersInArray);


///============= Sorting an array with oddd numbr revers =========
1.

function sortarr(arr) {
  let orderarr = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b)

  let oddindex = 0;
  return arr.map((num) => num % 2 !== 0 ? orderarr[oddindex++] : num)
}
console.log(sortarr(arr))


2. // n to flip elements
// at odd indexes
function flipHalf(arr, n) {
  let c = 0;
  let dup = n;

  let st = [];

  // Pushing elements at odd indexes
  // of a array to a stack
  for (let i = 0; i < n; i++) {
    let x = arr[i];

    if (c % 2 == 1)
      st.push(x);
    c++;
  }
  c = 0;
  // Replacing current elements at odd
  // indexes with element at top of stack
  for (let i = 0; i < n; i++) {
    let x = arr[i];

    if (c % 2 == 1) {
      x = st[st.length - 1];
      st.pop();
    }
    arr[i] = x;
    c++;
  }
}

let arr1 = [1, 2, 3, 4, 5, 6];
let n = arr1.length;
flipHalf(arr1, n);


//// ========================= Find Sub Array ============================


function findSubarrays(arr4, target) {
  let result = [];

  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr4.length; i++) {
      let currentNum = arr4[i];
      if (sum + currentNum <= target) {
        path.push(currentNum);
        backtrack(i + 1, path, sum + currentNum);
        path.pop();
      }
    }
  }

  backtrack(0, [], 0);

  return result;
}

let arr4 = [1, 2, 3, 4, 5];
let target_val = 8;

let subarrays = findSubarrays(arr4, target_val);
console.log(subarrays);


// ====================== check array palindrome ========================

const isPalindrome = (arr) => {
  const reversedArr = arr.slice().reverse();    // slice method return a shallow copy of an array into a new array 
  return arr.every((value, index) => value === reversedArr[index]);     // The Array.every() method is used to check whether all the elements of the array satisfy the given condition or not. retrun true and false   and use The  some() method will return true if any predicate is true
};

const arr = [1, 2, 3, 2, 1];
console.log(isPalindrome(arr)); // Output: true


// ====================== check string palindrome ========================

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("programmer")); // false

// ==================== Count Vowels and Consonants from string =================


function sum(str) {
  let ary = str.split('')
  console.log("ary", ary)
  let vowel_count = consonent = 0;
  console.log("ary", vowel_count, consonent)
  let vowel_ary = ['a', 'e', 'i', 'o', 'u']
  for (char of ary) {
    if (vowel_ary.some((val, ind) => val == char)) {
      vowel_count++
    } else {
      consonent++
    }

  }
  return { "vowel_count": vowel_count, "cons_count": consonent }
}

console.log(sum("educationbb"))

//=================find Anagrams =======================

function areAnagrams(str1, str2) {
  //   Remove any non-alphabetic characters and convert to lowercase
  let normalizedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  let normalizedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // If lengths differ, they cannot be anagrams
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Sort both strings and compare
  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');


}

console.log(areAnagrams("listen", "silent"));

// ========================= Flatten an Array ==============


function flatten(arr) {
  let flat_ary = []
  let flathandle = (arry) => {
    for (let count = 0; count < arry.length; count++) {
      let val = arry[count]
      if (Array.isArray(val)) {
        flathandle(val)
      } else {
        flat_ary.push(val)
      }
    }
  }
  flathandle(arr)
  return flat_ary
}
console.log(flatten([1, [2, 3], [4, [5], [6, [7]]]]))



const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* Flatten Array Holes */
const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]


//============================ Flatten an Object ==========================


let origObj = {
  a: "foo",
  b: {
    x: {
      m: "bar",
      n: {
        r: "ding",
      }
    },
    y: "100",
  },
  c: "wow",
};

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    // Define the new key by concatenating the parentKey with the current key
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    // If the current property is an object, call flattenObject recursively
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      // Otherwise, add the value to the result with the new key
      result[newKey] = obj[key];
    }
  }
  return result;
}

let transformedObj = flattenObject(origObj);
console.log(transformedObj);



//============================ find the longest word ===================

function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("she talks very loud")); // Output: "talks"
// ============================Find the count of two consecutive vowels in a given string =================================

//Consecutive vowels refer to two or more vowels that appear in a row, without any consonants or other non-vowel characters in between.

function countConsecutiveVowels(str) {
  const regex = /[aeiou][aeiou]/g;
  const matches = str.match(regex);
  console.log("matches", matches)
  return matches ? matches.length : 0;
}

// Example usage:
const str = 'abeitounoao';expec
const count = countConsecutiveVowels(str);
console.log(`Count of consecutive vowels: ${count}`);

// =========================== Shallow copy and Deep copy ==================================





A shallow copy is a copy that only goes one level deep.In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object.

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject };   // arr.slice() this method create a shallow copy for array , for obj { ...obj1 } spread operator or object.assign() method 

shallowCopy.a = 3; // Changes shallowCopy, but not originalObject  
shallowCopy.b.c = 4; // Changes both shallowCopy and originalObject  


A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays.

const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));     // we use JSON.stringify() to convert originalObject to a JSON string, and then use JSON.parse() to convert that string back to a new object deepCopy. It creates a deep copy of originalObject.

deepCopy.a = 3; // Changes deepCopy, but not originalObject  
deepCopy.b.c = 4; // Changes deepCopy, but not originalObject  



//================ MYSQL Char and VarChar  ===============================

    Char has a fixed size, but varchar has a variable size.Char data type stores data of fixed length, whereas the Varchar data type stores variable format data.Varchar data type values are not padded with spaces; char values are padded with spaces to the specified length.

  Char = Suppose you declare a variable of char(10) data type; it will always take 10 bytes of data regardless of whether you store one character, five characters, seven characters, or ten characters.It will always take 10 bytes, i.e., you can store a maximum of 10 characters in a column.Due to this, sometimes, a lot of database space is wasted.


    Varchar = Suppose you declare a variable of varchar(10) data type; then it will use the number of bytes equal to the number of characters.So, storing two characters will take two bytes; if you are storing five characters, it will take 5 bytes, and so on.Due to this, much database space is saved, which was wasted when using the Char data type.




      //================ Laxical scope  ===============================


      Lexical scope (also known as static scope) refers to the scope that is determined at the time the code is written, not when it is executed.In JavaScript, this means that the scope of a variable is defined by its position in the source code, and nested functions have access to variables declared in their outer scope.

lexical scope is the concept of determining the scope of a variable based on its declaration.This means that the scope of a variable is determined by the block of code in which it is declared, not by the block of code in which it is used.




//================ MYSQL Stored Procedure ===============================


A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

  DELIMITER //

CREATE PROCEDURE SelectAllUsers(IN RoleId INT)
BEGIN
SELECT *
  FROM supply_chain.users
    WHERE role_id = RoleId;
END //

DELIMITER;




///======== MYSQL Views =================

It abstracts the underlying table schema and restricts access to only the data returned by the view.Applications invoking the view cannot see how the tables are structured or what other data the tables contain.In this sense, the view acts as a virtual table, adding another layer of security that hides the structure of the physical tables.

A view also helps simplify queries because it presents a less complex version of the schema.For example, an application developer doesn’t need to create detailed, multi - table joins but can instead invoke the view in a basic SELECT statement. 

CREATE VIEW OrderCustomerView AS
SELECT Order
s.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;


// ===================== SQL Injection =====================

SQL injection is a type of security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.It typically occurs when user input is improperly sanitized and included directly in SQL queries.This can lead to unauthorized access to or manipulation of the database, potentially exposing or altering sensitive data.

  example -

const userInput = "some input"; // Example user input
const query = `SELECT * FROM users WHERE username = '${userInput}' AND password = 'password'`;

If an attacker provides the following input:

const userInput = "' OR '1'='1";

SELECT * FROM users WHERE username = '' OR '1' = '1' AND password = 'password';

The clause '1' = '1' is always true, so the query will return all rows in the users table, potentially allowing unauthorized access.

Types of SQL Injection -

  Classic SQL Injection: Basic injection where an attacker modifies the SQL query.
Blind SQL Injection: When the attacker cannot see the result of the query but can infer data based on the application's behavior.
Error - based SQL Injection: The attacker causes the database to generate an error message, which can provide information about the database structure.
  Union - based SQL Injection: The attacker uses the UNION SQL operator to combine the results of two or more queries into a single result.

    Prevention -

    1. Use Stored Procedures
2. Validate and Sanitize Input -

  Ensure that user input conforms to expected formats, lengths, and types.Use validation libraries to enforce these rules.
3. Use ORM Libraries -

  ORM libraries like Sequelize(for Node.js) or Hibernate(for Java) automatically handle many SQL injection prevention mechanisms.


    // ===  Normalizatin and Denormalization in MYSql =================

    normalization -

    normalization is a systematic approach to organizing data in a relational database to reduce redundancy and improve data integrity.It involves dividing large tables into smaller ones and defining relationships among them to ensure that the database is efficient and easy to maintain.

First Normal Form(1NF) - Each column contains only one value per row.Each row must be unique.

Second Normal Form(2NF) - All non - key attributes are fully functionally dependent on the primary key.This means that non - key attributes must depend on the entire primary key, not just a part of it(for tables with composite primary keys).

Third Normal Form(3NF) - All the attributes are functionally dependent only on the primary key.There should be no transitive dependency, meaning non - key attributes should not depend on other non - key attributes.

Higher Normal Forms -

  Boyce - Codd Normal Form(BCNF): A stricter version of 3NF where every determinant is a candidate key.
Fourth Normal Form(4NF): Deals with multi - valued dependencies and requires a table to be in BCNF and not have any multi - valued dependencies.
Fifth Normal Form(5NF): Deals with join dependencies and requires a table to be in 4NF and not have any join dependencies.

  Denormalization -

  While normalization optimizes data integrity and reduces redundancy, it can sometimes lead to performance issues due to the complexity of joins required to retrieve related data.Denormalization is the process of introducing redundancy into a database by combining tables or reducing the number of joins, which can improve read performance at the cost of increased storage and potential anomalies.

Denormalization is often used in read - heavy systems where performance is more critical than write operations, such as in data warehouses and analytical databases.The decision to denormalize should be based on careful consideration of the application's requirements and workload.




///======== MYSQL Temp Tables =================


A temporary SQL table, also known as a temp table, is a table that is created and used within the context of a specific session or transaction in a database management system.It is designed to store temporary data that is needed for a short duration and does not require a permanent storage solution.


///================ MYSQL Clustered and NON Clustered index  ====================

A clustered index is used to define the order or to sort the table or arrange the data by alphabetical order just like a dictionary.A non - clustered index collects the data at one place and records at another place.It is faster than a non - clustered index.It is slower than the clustered index.



///================ Reasons for Using Child Processes in Node.js ====================


Handling CPU - Intensive Tasks:

CPU - intensive operations(e.g., complex calculations, data processing, file manipulation) can block the main event loop.By using child processes, these tasks can be offloaded to separate threads, ensuring the main thread remains responsive.
  Child processes allow these tasks to be executed in parallel, taking advantage of multi - core processors.




// ===================================== Triggers in MySql  =========================================


Triggers are set of SQL statements.It is a special type of stored procedure that is invoked automatically in response to an event.Each trigger is associated with a table, which is activated on any DML statement such as INSERT, UPDATE, or DELETE.

triggers are of two types according to the SQL standard:

1. row - level triggers
2. statement - level triggers. // Does not support in MySql 


  Row - Level Trigger:   It is a trigger, which is activated for each row by a triggering statement such as insert, update, or delete.


Create Trigger Query -


  DELIMITER //  
Create Trigger before_insert_genderupdate   
BEFORE INSERT ON supply_chain.users FOR EACH ROW
BEGIN  
IF NEW.gender < 0 THEN SET NEW.gender = 1;  
END IF;
END //  


Show Trigger -

  SHOW TRIGGERS FROM supply_chain  // suply_chain is a DB name



// ============ Closure inside currying to store a,b vairable for later use =============================

function func(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

let final = func(2)(3)() // NaN coz in third level it is expecting a num for calculate.
console.log(final)




    // ========================= Diffrence between Rest and Websocket Apis ==================================

Websocket Apis =
  Web Socket APIs allow bi - directional, full - duplex communication between clients and servers.
    WebSocket APIs enable real - time communication between the server and client.
    It is Stateful protocol.It will store the data.
    It is Bi - directional.Messages can be received or sent by both server or client.
    it is full duplex model.
    It is suitable for real - time applications.It does not have any overhead.
    Only Single TCP connection.
    It depends upon the IP address and port number to retrieve the data 



    REST Apis =

  It is Stateless protocol.It will not store the data.
    It is Uni - directional.Only either server or client will communicate.
    It is Request - response model.
    HTTP request contains headers like head section, title section.
    New TCP connection will be set up for each HTTP request.
    It depends upon the HTTP methods to retrieve the data..


    Soap Apis =

  The SOAP is use to design api and its approach is highly structured and uses XML data format.
    SOAP focuses on reliability and vertical scalability, which makes it suitable for enterprise and mission - critical applications that require high security and reliability.


  // =================== What makes nodejs more scalabel ====================

  Node.js is designed to be highly scalable, making it suitable for building applications that can handle a large number of concurrent connections.Several features and architectural decisions contribute to the scalability of Node.js:


1. Event - Driven, Non - Blocking I / O
2. Single - Threaded Event Loop
3. Asynchronous Programming
4. Cluster Module
5. Scalable Network Applications
6. Microservices Architecture
7. Efficient Memory Usage
8. Horizontal and Vertical Scaling

Node.js supports both horizontal and vertical scaling:

Horizontal Scaling: Adding more instances of the application, often distributed across multiple machines.
Vertical Scaling: Increasing the resources(CPU, memory) of a single machine where the application is running.

// ================  Sharding in MongoDB ====================


Sharding is a method for distributing data across multiple machines.MongoDB uses sharding to support deployments with very large data sets and high throughput operations.Database systems with large data sets or high throughput applications can challenge the capacity of a single server.
