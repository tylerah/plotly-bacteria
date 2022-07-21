var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};

var trace1 = {
    x: [4.7, 4.5, 4.7, 4.5, 4.3, 4.3, 4.5, 4.8],
    y: [1.8, 1.4, 1.8, 1.9, 1.6, 1.4, 1.6, 1.7],
    type: "scatter",
    mode: "markers"
};

var data1 = [trace1];

var layout1 = {
    title: "Scatter Plot Practice",
    xaxis: {title: "Numbers"},
    yaxis: {title: "More Numbers"}
};

Plotly.newPlot("plotArea", data, layout);

Plotly.newPlot("2ndPlot", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("scatter", data1, layout1);


