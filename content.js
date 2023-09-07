// Function to remove specified options from dropdown
function removeOptions() {
  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (
        option.textContent === "All Mobile Devices" ||
        option.textContent === "All Users"
      ) {
        option.remove();
      }
    });
  });
}

// Run the function to remove specified options
removeOptions();

// Optional: Run the function periodically to handle dynamically generated dropdowns
setInterval(removeOptions, 2000);
