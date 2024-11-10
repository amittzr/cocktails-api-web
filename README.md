# Get your cocktail 

This project is a web application that allows users to discover random cocktails or search for cocktails by name. It fetches data from the CocktailDB API and displays details about each cocktail, including ingredients, instructions, and an image.

## Features
- Get a random cocktail.
- Search for a cocktail by name.
- Display cocktail details, including ingredients, category, instructions, and image.

## Prerequisites
- Node.js and npm installed on your system.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cocktail-maker.git
   cd cocktail-maker
   ```
2. Install the dependencies:
    ```bash
   npm install
   ```
3. Run the server: For development, use nodemon to automatically restart the server on changes:
   ```bash
   nodemon index.js
   ```
   if you don’t have nodemon installed, you can install it globally:
   ```bash
   npm install -g nodemon
   ```
   Alternatively, you can run the server directly using:
   ```bash
   node index.js
   ```
5. Access the application: Open your web browser and go to http://localhost:3000 to access the application.

## Folder Structure
   ```graphql
cocktail-maker/
├── index.js             # Main server file
├── views/
│   └── index.ejs        # EJS template file for rendering the HTML page
├── public/styles/
│   └── main.css       # CSS file for styling
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
   ```
## API Reference
This application uses the TheCocktailDB API to fetch cocktail data.
- Random Cocktail: Fetch a random cocktail with GET /api/json/v1/1/random.php.
- Search by Name: Search cocktails by name with GET /api/json/v1/1/search.php?s=cocktailname.

## License
This project is licensed under the MIT License.
   
