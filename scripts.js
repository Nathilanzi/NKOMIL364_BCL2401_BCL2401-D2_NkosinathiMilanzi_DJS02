const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (!dividend || !divider) {
      // Scenario: Validation when values are missing
      result.classList.add("error-message");
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
    } else if (isNaN(dividend) || isNaN(divider)) {
      // Scenario: Providing anything that is not a number
      throw new Error("Non-numeric input provided");
    } else if (parseInt(divider) === 0) {
      // Scenario: An invalid division should log an error in the console
      result.innerText = "Division not performed. Invalid number provided. Try again";
      console.error("Error: Division by zero");
    } else {
      // Scenario: Dividing numbers result in a decimal number
      result.innerText = Math.floor(dividend / divider);
    } 
  } catch (error) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error:", error.message);
    console.error(error.stack);
  }
});