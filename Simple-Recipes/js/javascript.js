//recipe pop-up modal section

//stores all recipe modal buttons as an array
var btns = document.querySelectorAll("input.modal-button");

var modals = document.querySelectorAll(".recipe-modal");

var closeBtn = document.getElementsByClassName("close-btn");


for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
        //set modal timeout to 10s
        ModalTimeOut = setTimeout(() => closeModal(modal), 10000);
    }
}

//close the modal btn
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
                clearTimeout(ModalTimeOut); //clear timeout on close btn so it doesn't carry to a different modal
            }
        }
    }
}

//close modal on timeout
function closeModal() {
    for (var index in modals) {
        if (modals[index].style) {
            modals[index].style.display = "none";
        }
    }
}


//contact form validation

document.getElementById("contactForm").addEventListener("submit",
    function (event) {
        //overwrites default browser refresh when the submit button is clicked
        event.preventDefault();

        //vars to validate the fields are filled out
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        //email pattern checks if the symbols match email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

        const valMsg = document.getElementById("validateMsg");

        if (!firstName || !lastName || !phone || !message) {
            valMsg.innerHTML = '<p style="color:red;">Please fill out all empty fields</p>'
        } else if (!emailPattern.test(email)) {
            valMsg.innerHTML = '<p style="color:red;">Please input correct email address</p>'
        } else {
            valMsg.innerHTML = '<p "color=red;">Thank you for filling the form</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById("subscription").checked
        };

        console.log(JSON.stringify(formData));
    }
)