// Get elements
const addRecipeBtn = document.getElementById('add-recipe-btn');
const recipeNameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('ingredients');
const instructionsInput = document.getElementById('instructions');
const searchInput = document.getElementById('search-input');
const recipeList = document.getElementById('recipe-list');

// Store recipes in an array
let recipes = [];

// Add Recipe Function
addRecipeBtn.addEventListener('click', () => {
    const recipeName = recipeNameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    // Validate input
    if (recipeName && ingredients && instructions) {
        const recipe = {
            name: recipeName,
            ingredients: ingredients.split(','),
            instructions: instructions
        };

        // Add recipe to array
        recipes.push(recipe);
        
        // Clear the form
        recipeNameInput.value = '';
        ingredientsInput.value = '';
        instructionsInput.value = '';

        // Display all recipes
        displayRecipes(recipes);
    } else {
        alert('Please fill in all fields.');
    }
});

// Display Recipe Cards
function displayRecipes(recipes) {
    recipeList.innerHTML = ''; // Clear the existing recipes

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p class="ingredients"><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p class="instructions"><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipeList.appendChild(card);
    });
}

// Search Function
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
});

// Initial display of recipes (empty initially)
displayRecipes(recipes);
