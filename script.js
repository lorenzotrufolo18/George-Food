const orderSummary = document.querySelector("#order-summary tbody");
const totalDisplay = document.getElementById("total");
let totalAmount = 0;

// Function to Add Items to the Order
function addToOrder() {
  const dish = document.getElementById("dish").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // Define Prices
  let price;
  switch (dish) {
    case "Pizza":
      price = 10;
      break;
    case "Khachapuri":
      price = 12;
      break;
    case "Khinkali":
      price = 8;
      break;
  }

  const cost = price * quantity;
  totalAmount += cost;

  // Add row to order summary
  const row = `<tr><td>${dish}</td><td>${quantity}</td><td>$${cost}</td></tr>`;
  orderSummary.insertAdjacentHTML("beforeend", row);

  // Update total
  totalDisplay.innerText = `Total: $${totalAmount}`;
}

// Event Listener for Checkout Button
document.getElementById("checkout-button").addEventListener("click", () => {
  if (totalAmount <= 0) {
    alert("Your order total must be greater than $0 to proceed to payment.");
    return;
  }

  // Redirect to Stripe Payment Page (Replace URL with your actual Stripe Payment Link)
  window.location.href = "https://buy.stripe.com/test_28oeVf4ppd6u6yccMM";
});

