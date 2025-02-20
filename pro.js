// This JavaScript code saves and retrieves form data using localStorage.

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements
    const submitButton = document.querySelector('.button2');
    const resetButton = document.querySelector('.button3');

    // Handle form submission
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent traditional form submission

        // Collect form data from the inputs
        const formData = {
            state: document.getElementById('state').value,
            district: document.getElementById('District').value,
            block: document.getElementById('Block').value,
            panchayat: document.getElementById('Panchayat').value,
            village: document.getElementById('Village').value,
            familyID: document.querySelector('input[placeholder="-Enter The Id-"]').value
        };

        // Save the form data to localStorage
        localStorage.setItem('mgnregaFormData', JSON.stringify(formData));
        alert('Form data saved successfully!');
    });

    // Handle form reset
    resetButton.addEventListener('click', function () {
        localStorage.removeItem('mgnregaFormData');
        alert('Form data cleared successfully!');
    });

    // Preload saved data if available
    const savedData = localStorage.getItem('mgnregaFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('state').value = formData.state;
        document.getElementById('District').value = formData.district;
        document.getElementById('Block').value = formData.block;
        document.getElementById('Panchayat').value = formData.panchayat;
        document.getElementById('Village').value = formData.village;
        document.querySelector('input[placeholder="-Enter The Id-"]').value = formData.familyID;
    }
});
