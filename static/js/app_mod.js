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

// Create a new function, handleClick
function handleClick() {
    // Create a couple of variables to hold our date data, both filtered and unfiltered
    let date = d3.select("#datetime").property("value");

    // Set a default filter and save it to a new variable
    let filteredData = tableData;

    // Check for a date filter using an if statement
    // "If there is a date already set, then use that date as a filter. If not, then return the default data."
    if (date) {
        // "Show only the rows where the date is equal to the date filter we created above."
        // The triple equal signs test for strict equality, meaning that the date in the table has to match our filter exactly.
        // A double equal sign is checking for loose equality - both type and value are loosely matched.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

// Rebuild the table using the filtered data
// Note: If no date was entered, then filteredData will just be the original tableData.
buildTable(filteredData);

}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);