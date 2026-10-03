//initialise popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
})

//initialise toasts
const toastElList = document.querySelectorAll('.toast');
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

//function to display toasts with selected movie options

function displaySelectedOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //display toast

    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedOptions();
}

//add a tooltip to buy tickets button
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const exampleEl = document.getElementById('tooltip');
const displayTootlip = new bootstrap.Tooltip(exampleEl);

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
        $("nav").addClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "-8px");
    } else {
        $("nav").removeClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close the mobile navbar when a navigation link or dropdown item is clicked
//this is different to the tutorial files as collapse('hide') wasn't available in newer version of bootstrap
document.querySelector(".navbar-nav").addEventListener("click", function (event) { //find the navbar ul with links
    // only get clicks inside a nav link or dropdown item
    //checks the clicked elements and its parent for either nav-link or dropdown toggle or dropdown-item
    if (!(event.target instanceof Element) ||
        !event.target.closest(".nav-link:not(.dropdown-toggle), .dropdown-item")) {
        return; //otherwise do nothing
    }

    // Find the collapsible navbar element
    const navbarCollapse = document.getElementById("navbarNavDropdown");
    // Get its Bootstrap Collapse div without toggling it, then close it
    bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }).hide();
});