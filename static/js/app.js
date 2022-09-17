// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function, buildTable
function buildTable(data) {
    
    // Clear the existing data to create a fresh table to insert data
    // (tell JavaScript to use an empty string when creating the table to create a blank canvas)
    tbody.html("");
    // Create a forEach function that loops through the data array and adds a row and cells of data to the table
    data.forEach((dataRow) => {
        // Create a variable that will append a row to the table body
        // (We use let instead of var because this variable is limited to just this block of code)
        let row = tbody.append("tr");

        // Set up another function to put each UFO sighting onto its own row of data
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {

            // Append each value of the object to a cell in the table
            // Create a variable to append data to a table
            let cell = row.append("td");

            // Add the values
            cell.text(val);


        });
    });



}