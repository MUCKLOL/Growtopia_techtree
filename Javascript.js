document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    // Fetch data and generate tech tree here
    console.log('Item name submitted:', itemName);
});
