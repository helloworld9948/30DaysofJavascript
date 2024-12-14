
### Exercises: Level 2

1. Develop a small script which generate any number of characters random id:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Write a script which generates a random hexadecimal number.

    ```sh
    '#ee33df'
    ```

1. Write a script which generates a random rgb color number.

    ```sh
    rgb(240,180,80)
    ```

1. Using the above countries array, create the following new array.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Using the above countries array, create an array for countries length'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Use the countries array to create the following array of arrays:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Using the above countries array, find the country containing the biggest number of characters.

      ```sh
      Ethiopia
      ```

5. Using the above countries array, find the country containing only 5 characters.

    ```sh
    ['Japan', 'Kenya']
    ```

6. Find the longest word in the webTechs array
7. Use the webTechs array to create the following array of arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
11. Print all the elements of array as shown below.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Exercises: Level 3

1. Copy countries array(Avoid mutation)
```js

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const newarray = [] 
for (let i = 0; i < countries.length; i++) {
  console.log(newarray[i] = countries[i])
}


```

1. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

```js 

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Ethiopia',
    'Ireland',
    'Germany',
    'Hungary',
    'Japan',
    'Kenya'
  ]
  const newarray=[]
  for (let i = 0; i < countries.length; i++) {
    newarray[i] = countries[i]
  }
  const sortedCountries = newarray.sort()
  console.log(sortedCountries)

```


1. Sort the webTechs array and mernStack array

```js

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

console.log(webTechs.sort());
console.log(mernStack.sort());

```

1. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

```js
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

 let landarray = []
for (let index = 0; index < countries.length; index++) {
    if (countries[index].includes("land")) {
      landarray.push(countries[index])
      
    }
}
console.log(landarray);
```
1. Find the country containing the hightest number of characters in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
```js

let longestCountry = countries[0];
let maxLength = longestCountry.length;

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > maxLength) {
    longestCountry = countries[i];
    maxLength = countries[i].length;
  }
}

console.log(longestCountry);
```
1. Extract all the countries containing only four characters from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
```js
let fourcountries= []
for (let index = 0; index < countries.length; index++) {
  if (countries[index].length == 4) {
    fourcountries.push(countries[index])
    
  }
  
}
console.log(fourcountries);

```
1. Extract all the countries containing two or more words from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
```js


let multiplewords = []

for (let index = 0; index < countries.length; index++) {
  if (countries[index].includes(' ')) { 
    multiplewords.push(countries[index])
}
}
console.log(multiplewords);
```


1. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array
```js
let reversearray= []
reversearray = countries.reverse()
let capitalarray= []
for (let index = 0; index < reversearray.length; index++) {
  capitalarray.push(reversearray[index].toUpperCase())
  
}
console.log(capitalarray);

```