const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries.get("divider");

});

// Error handling: check if inputs are empty
if (!dividend || !divider) {
  result.classList.add("error-message")
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return;
}

    // Error handling: check if inputs contain invalid characters
    const validInputRegex = /^[0-9]+$/;
    if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
        result.classList.add("critical-error")
        result.innerText = "Something critical went wrong. Please reload the page.";
        return;
    }