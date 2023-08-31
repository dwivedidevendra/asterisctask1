document.getElementById('toggleFormButton').addEventListener('click', function () {
    var form = document.getElementById('registrationForm');
    form.classList.toggle('hidden');
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Perform form validation and submission logic here
    // For simplicity, assume the form is valid and submission is successful

    setTimeout(function () {
        location.reload();
    }, 5000);

    // Hide the registration form
    document.getElementById('registrationForm').style.display = 'none';

    // Display the thank you response
    document.getElementById('confirmationMessage').style.display = 'block';


    // Function to handle opening the registration form page
    function openRegistrationForm() {
        window.open("registrationForm", "_blank");
    }

    // Event listener for "Register Now" button click
    document.getElementById("toggleFormButton").addEventListener("click", openRegistrationForm);



});
