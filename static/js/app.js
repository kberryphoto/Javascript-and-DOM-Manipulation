// from data.js
var tableData = data;

// YOUR CODE HERE!
// Set the variable for the data table
var tbody = d3.select("tbody");


// forEach the information from the data file into the HTML
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });