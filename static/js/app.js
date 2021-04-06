// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table function
function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Loop through each object in the data array
    data.forEach((dataRow) => {
        // Create a variable that will append a row to the HTML table body.
        let row = tbody.append("tr");

        // Loop through each field in the dataRow 
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object as a table cell (td)
            let cell = row.append("td");
            // Add the values
            cell.text(val);
            }
        );
    });
}

// Build handleClick function to filter data.
function handleClick() {
    // Create variable that will locate the #datetime id and hold the value.
    let date = d3.select("#datetime").property("value");
    // Set a default filter and save it to a new variable.
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data
    // using that date.
    if (date) {
        // Apply 'filter' to the table data to only keep the 
        // rows where the 'datetime' value matches the filter value.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads.
buildTable(tableData);