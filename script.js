const entryButton = document.getElementById("entryButton");
const resetButton = document.getElementById("resetButton");
const table = document.getElementById("table");

// event listener to the ENTRY button
entryButton.addEventListener("click", function (event) {
  event.preventDefault();
   // Prevent form submission
  
  // form values
  const invoice = document.getElementById("invoice").value;
  const customer = document.getElementById("customer").value;
  const shipment = document.getElementById("shipment").value;
  const price = document.getElementById("price").value;
  const purchasedPrice = document.getElementById("purchasedPrice").value;
  const status = document.getElementById("status").value;

  // Validate form inputs
  if (!invoice || !customer || !shipment || !price || !purchasedPrice || status === "Select One") {
    alert("Please fill out all fields and select a valid status.");
    return;
  }

  const newRow = table.insertRow();

  // Insert cells into the row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);

  // Add values to the cells
  cell1.textContent = invoice;
  cell2.textContent = customer;
  cell3.textContent = shipment;
  cell4.textContent = price;
  cell5.textContent = purchasedPrice;
  cell6.textContent = status;

  // Clear the form after adding the row
  document.getElementById("receiptForm").reset();
});

// Add event listener to the RESET button
resetButton.addEventListener("click", function () {
  document.getElementById("receiptForm").reset();
});
