// number mapping practice
var numbers = [1,2,3,4,5];

var doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled);

var numbers2 = [0, 2, 4, 6, 8];

var addFive = numbers2.map(function(add5){
    return add5 + 5;
});

console.log(addFive)

// city mapping practice
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(function(population){
    return population.population;
});

console.log(cityPopulation);

// practice with .filter
var numbers3 = [1,2,3,4,5];

var larger = numbers3.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var animalsS = words.filter(function(s){
    return s[0] === "s";
});

console.log(animalsS);

// practice sorting with arrow functions
var familyAge = [3,2,39,37,9];

var ascendingAge = familyAge.sort((a,b) => a - b);

console.log(ascendingAge);

var descendingAge = familyAge.sort((a,b) => b - a);

console.log(descendingAge);

// slicing practice

var words2 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sliceWords2 = words2.slice(0,3);

console.log(sliceWords2);