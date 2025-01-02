// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the form and the toast element
    var form = document.getElementById("queryForm");
    var toast = document.getElementById("toast");

    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Show the toast message
        toast.classList.add("show");

        // Hide the toast message after 3 seconds
        setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);

        // Reset the form
        form.reset();
    });
});

// Toggle menu function
function toggleMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".menu-mobile .close");

    menuMobile.classList.toggle("active");

    if (menuMobile.classList.contains("active")) {
        hamburger.style.display = "none";
        closeBtn.style.display = "block";
    } else {
        hamburger.style.display = "block";
        closeBtn.style.display = "none";
    }
}
