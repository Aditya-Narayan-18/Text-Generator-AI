# Text-Generator-AI
Text Generator Web Application

This is a web application that uses the Hugging Face GPT-2 model to generate AI-based text. The project integrates Flask as the backend framework and a responsive frontend for user interaction.

Features

User-friendly interface to input text prompts.

AI-based text generation using Hugging Face GPT-2.

AJAX integration for real-time text generation without page reloads.

Simple and clean design with separate frontend and backend components.

Demo

The application runs on http://127.0.0.1:5000 after starting the server locally.

Project Structure

Txt_generate/
|-- static/
|   |-- style.css       # CSS for styling the website
|   |-- script.js       # JavaScript for AJAX and interactivity
|
|-- templates/
|   |-- index.html      # Main HTML file for the application
|
|-- venv/               # Virtual environment (local Python dependencies)
|
|-- main.py             # Flask application entry point
|-- requirements.txt    # List of Python dependencies

Installation

Clone the repository:

git clone <repository_url>

Navigate to the project directory:

cd Txt_generate

Create a virtual environment and activate it:

python -m venv venv
venv\Scripts\activate  # On Windows

Install dependencies:

pip install -r requirements.txt

Run the Flask server:

python main.py

Open your browser and navigate to:

http://127.0.0.1:5000

Dependencies

Python 3.7 or higher

Flask

Hugging Face Transformers

Torch

Install these via the requirements.txt file:

pip install -r requirements.txt

Usage

Enter a text prompt into the input field on the webpage.

Click the "Generate" button to receive AI-generated text.

View the generated text on the same page.

Screenshots

(Add screenshots of the application running locally to make it more descriptive.)

Future Improvements

Add support for multiple AI models like GPT-3.

Enable user authentication for saving and retrieving generated text.

Improve the UI for a more dynamic user experience.

Contributions

Contributions are welcome! Feel free to submit a pull request or report any issues.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Hugging Face for providing the GPT-2 model.

Flask documentation for guidance on backend development.

Author

Developed by Aditya Narayan. Feel free to reach out for questions or suggestions!

