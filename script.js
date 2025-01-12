document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;

    try {
        // Send POST request to the Flask server
        const response = await fetch('http://127.0.0.1:5000/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, max_length: 300 })
        });

        // Parse the response JSON and display the generated text
        const data = await response.json();
        if (data.generated_text) {
            document.getElementById('output').textContent = data.generated_text;
        } else {
            document.getElementById('output').textContent = 'Error: No generated text.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('output').textContent = 'An error occurred!';
    }
});
