# Questionnaire

Simple survey app built with Vue.js 3 that saves results as PDF

Questionnaire is a simple survey application built with Vue.js 3. It allows users to answer questions sourced from a JSON format, and the results are saved in a PDF format.

## Features

- Displays questions from a JSON file (`questions.json`)
- Users can provide their answers
- Results are saved in a PDF file (`answers.pdf`)
- User-friendly interface
- Easy to set up and customize

## Getting Started

### Prerequisites

- Node.js (v14 or above)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/judas-priest/questionnaire.git
   ```

2. Navigate to the project directory:

   ```bash
   cd questionnaire
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Usage

1. Add your questions to the questions.json file:

   ```json
   [
     {
       "question": "1. What is your favorite metal band?",
       "placeholder": "e.g. Judas Priest, Metallica, Iron Maiden, etc"
     },
     {
       "question": "3. Who is your favorite Star Wars character?",
       "placeholder": "e.g. Luke Skywalker, Darth Vader, Han Solo, Princess Leia, etc"
     }
   ]
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit http://localhost:5173 to see the Questionnaire app.

4. Once the user completes the questionnaire, the results are saved in a PDF format.

### Building for Production

To build the project for production, run the following command:

```bash
npm run build
```

This will generate minified and optimized files in the /dist directory.
