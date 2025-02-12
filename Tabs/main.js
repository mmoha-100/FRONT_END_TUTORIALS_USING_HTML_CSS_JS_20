const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll(".tabs li");

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabButton.classList.add("active");
        Array.from(tabContainer.children).forEach((content) => {
            content.classList.add("v-hidden");
        });
        const contentToShow = document.querySelector(
            `.${tabButton.textContent.toLowerCase()}`
        );
        if (contentToShow) {
            contentToShow.classList.remove("v-hidden");
        }
    });
});
