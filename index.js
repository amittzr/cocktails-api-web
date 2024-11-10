import express from "express";
import axios from "axios";


// Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

// public folder for static files
app.use(express.static("public"));

//useing axios to get random cocktail and pass it to index.ejs
app.get("/", async (req, res) => {
    try {
    const result = await axios.get(API_URL +"/random.php");
    const drink = result.data.drinks[0];

    //   console.log(result.data.drinks[0].strDrink);

    res.render("index.ejs", formatDrinkData(drink));
    } catch (error) {
    //   res.render("index.ejs", { content: JSON.stringify(error.response.data) });
        console.error("Error fetching cocktail data:", error);
        res.render("index.ejs", getErrorData());
    }
});

app.get("/search", async(req,res)=>{
    const name = req.query.name;
    console.log(name);

    try {
        const result = await axios.get(`${API_URL}/search.php?s=${name}`);
        const drink = result.data.drinks ? result.data.drinks[0] : null;

        if (drink) {
            res.render("index.ejs", formatDrinkData(drink));
        } else {
            res.render("index.ejs", { ...getErrorData(), name: "Cocktail not found" });
        }
    } catch (error) {
        console.error("Error fetching cocktail by name:", error);
        res.render("index.ejs", getErrorData());
    }


});

// Listen to the port and start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

  // Helper function to format drink data for rendering
function formatDrinkData(drink) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push({
                ingredient,
                measure: measure || ''
            });
        }
    }

    return {
        name: drink.strDrink,
        isAlcoholic: drink.strAlcoholic,
        category: drink.strCategory,
        instructions: drink.strInstructions,
        photo: drink.strDrinkThumb,
        ingredients
    };
}

// Helper function for error handling
function getErrorData() {
    return {
        name: "Error fetching data",
        isAlcoholic: "",
        category: "",
        instructions: "",
        photo: "",
        ingredients: []
    };
}