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