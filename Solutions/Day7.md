## 💻 Exercises

### Exercises: Level 1

1. Declare a function _fullName_ and it print out your full name.
2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercises: Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```
```js
const prompt = require("prompt-sync")();

function userIdGeneratedByUser() {
  let nochar = parseInt(prompt("Enter the number of characters: "), 10);
  let noid = parseInt(prompt("Enter the number of IDs: "), 10);

  if (isNaN(nochar) || isNaN(noid) || nochar <= 0 || noid <= 0) {
    console.log("Please enter positive numbers for both fields.");
    return;
  }
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < noid; i++) {
    let id = "";
    for (let j = 0; j < nochar; j++) {
      let randomindex = Math.floor(Math.random() * characters .length);
      id += characters.charAt(randomindex);
    }
    console.log(id);
  }
}

userIdGeneratedByUser();
```
1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```
```js
const prompt = require("prompt-sync")();


const red = parseInt(prompt("Enter the value of red: "));
const green = parseInt(prompt("Enter the value of green: "));
const blue = parseInt(prompt("Enter the value of blue: "));
const rgbColorGenerator = (red,green,blue) => {
  console.log (`rgb(${red},${green},${blue})`);
}
rgbColorGenerator(red,green,blue)
```
1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
```js
const prompt = require("prompt-sync")();


function arrayOfHexaColors(){
  hexacolours = [];
  for (i = 0; i < 6; i++ ){
    hexacolours.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  }
  return hexacolours;
}
console.log(arrayOfHexaColors());


```
1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
```js
const prompt = require("prompt-sync")();


function arrayOfRgbColors(){
  rgbcolours = [];
  for (i = 0; i < 6; i++ ){
    rgbcolours.push(`rgb(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)})`);
}
  return rgbcolours;
}
console.log(arrayOfRgbColors());
```

1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
```js
const prompt = require("prompt-sync")();


let hexacolour = prompt("Enter a hexacolour: ");
function convertHexaToRgb(hexacolour){
  let r = parseInt(hexacolour.substring(1, 3), 16);
  let g = parseInt(hexacolour.substring(3, 5), 16);
  let b = parseInt(hexacolour.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb(hexacolour))
```
1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.

```js

const prompt = require("prompt-sync")();


let red = parseInt(prompt("Enter a value for red: "),10);
let green = parseInt(prompt("Enter a value for green: "),10);
let blue = parseInt(prompt("Enter a value for blue: "),10);

function convertRgbToHexa(red, green, blue) { 

return "#" + red.toString(16) + green.toString(16) + blue.toString(16);

}
console.log(convertRgbToHexa(red, green, blue))
```

1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```
```js
const prompt = require("prompt-sync")();

let type = prompt("Enter color type : ");
let count = prompt("Enter number of colors : ");
generateColors(type , count);

function generateColors(type , count) {
  if (type === "hexa") {
    console.log(arrayOfHexaColors(count)); 
  }
  else{
    console.log(arrayOfRgbColors(count)); 
  }
}
function arrayOfRgbColors(count){
  rgbcolours = [];
  for (i = 0; i < count; i++ ){
    rgbcolours.push(`rgb(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)}),(${Math.floor(Math.random()*256)})`);
}
  return rgbcolours;
}

function arrayOfHexaColors(count){
  hexacolours = [];
  for (i = 0; i < count; i++ ){
    hexacolours.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  }
  return hexacolours;
}
```
1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
```js
const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ShuffleArray = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
 
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log(ShuffleArray(arr));
```


1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number

```js
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number: ")); 
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(n));

```

1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not

```js
const prompt = require("prompt-sync")();

let Array = [1,2,3,4,5,6,7,8,9,10];

let isEmpty = (Array) => {
  if (Array.length === 0) {
    return  true;
  }
  else {
    return false;
  }
}
console.log(isEmpty(Array));
```

1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
```js
const prompt = require("prompt-sync")();

let Array = [1,2,3,4,5,6,7,8,9,10];
let sum= 0;
let sumofArray = (Array) => {
  for (let index = 0; index < Array.length; index++) {
    if (typeof Array[index] !== 'number') {
      return `Error: Item at index ${index} is not a number.`;
    }
    else{
     sum += Array[index];
    }  
  }return sum;
}
console.log(sumofArray(Array));

```


1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array