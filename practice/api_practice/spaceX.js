const url = "https://api.spacexdata.com/v2/launchpads";

// retrieve data
d3.json(url).then(receivedData => console.log(receivedData));

// retrieve only the full_name for the first results in the josn array
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// use .map to get all latitude and longitude results
