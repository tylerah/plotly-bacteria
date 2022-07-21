console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

console.log(topFiveCities);

//create arrays for top five cities graph
var topFiveCityNames = cityGrowths.map(city => city.City);

var topFiveCityNamesSliced = topFiveCityNames.slice(0,5);

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var topFiveCityGrowthsSliced = topFiveCityGrowths.slice(0,5);

//create the bar chart
var trace = {
    x: topFiveCityNamesSliced,
    y: topFiveCityGrowthsSliced,
    type: "bar"
}

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
}

Plotly.newPlot("bar-plot", data, layout);

//create a second bar chart

var largestCities = cityGrowths.sort((a,b) => b.population - a.population);

console.log(largestCities);

// create the arrays for the chart
var largestCitiesName = largestCities.map(city => city.City);

var largestCitiesNameSliced = largestCitiesName.slice(0,7);

var largestCitiesPopulation = largestCities.map(city => parseInt(city.population));

var largestCitiesPopulationSliced = largestCitiesPopulation.slice(0,7);

// create the bar chart
var trace1 = {
    x: largestCitiesNameSliced,
    y: largestCitiesPopulationSliced,
    type: "bar"
};

var data1 = [trace1];

var layout1 = {
    title: "Largest Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot-2", data1, layout1);
