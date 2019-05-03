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

// Prevent the page from refreshing
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  d3.event.preventDefault();

});

// Filter by date based on user input
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

// Prevent the page from refreshing
var submit1 = d3.select("#filter-btn1");

submit1.on("click", function() {

  d3.event.preventDefault();

});

// Filter by city based on user input
function myFunction1() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("city");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

// Prevent the page from refreshing
var submit2 = d3.select("#filter-btn2");

submit2.on("click", function() {

  d3.event.preventDefault();

});

// Filter by state based on user input
function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("state");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

// Prevent the page from refreshing
var submit3 = d3.select("#filter-btn3");

submit3.on("click", function() {

  d3.event.preventDefault();

});

// Filter by country based on user input
function myFunction3() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("country");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

// Prevent the page from refreshing
var submit4 = d3.select("#filter-btn4");

submit4.on("click", function() {

  d3.event.preventDefault();

});

// Filter by shape based on user input
function myFunction4() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("shape");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};
  
