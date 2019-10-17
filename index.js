var input = document.getElementById("SearchForInventory");
input.addEventListener("keyup", function(event) 
{
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("SearchInventoryButton").click();
  }
});

function GenerateRandomNumber()
{
    var InventoryName = document.getElementById("SearchForInventory").value;
    if (InventoryName)
    {
        var RandomNumber = Math.floor(Math.random() * 100);
        alert("Available Quantity of " + '"' + InventoryName + '"' + " is: " + RandomNumber);
        document.getElementById("SearchForInventory").value = null;
    }
    else
    {
        alert("You must Type the Inventory Name, You want to Search for!!!");
    }    
}