window.addEventListener("beforeunload", (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = "";
});

const modal = document.getElementById("feedbackModal");
let modalShown = false;

// 1. Detect when mouse leaves the top of the viewport (Exit Intent)
document.addEventListener("mouseleave", (event) => {
  if (event.clientY < 0 && !modalShown) {
    modal.style.display = "block";
    modalShown = true; // Prevents it from popping up repeatedly
  }
});

// 2. Handle the "Yes" action
document.getElementById("yesBtn").addEventListener("click", () => {
  modal.innerHTML = `
                <h3>Thank you for your feedback!</h3>
                <p>Safe travels!</p>
            `;
  // Optional: Close modal automatically after 2 seconds
  setTimeout(() => (modal.style.display = "none"), 2000);
});

// 3. Handle the "No" action
document.getElementById("noBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
