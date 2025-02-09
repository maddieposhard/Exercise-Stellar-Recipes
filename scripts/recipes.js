document.addEventListener("DOMContentLoaded", () => { 
    const recipesGrid = document.querySelector(".js-recipes-grid");

    if (!recipesGrid) return;

   // Generate and insert recipes
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <button class="view-recipe-button" data-id="${recipe.id}">View Recipe</button>
        `;
        recipesGrid.appendChild(recipeCard);
    });

    // Event listener for recipe buttons
    recipesGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-recipe-button")) {
            const recipeId = event.target.dataset.id;
            const recipe = findRecipe(recipeId.toString())
            alert(`Ingredients: ${recipe.ingredients}\n\nSteps: ${recipe.steps}`);
            // Navigate or load recipe details dynamically
        }
    });
});

function findRecipe(recipeId) {
    let returnedRecipe = null
    recipes.forEach(recipe => {
        if (recipe.id === recipeId) {
            returnedRecipe = recipe
        } 
    })
    return returnedRecipe
}
    


// function renderRecipes(listRecipes) {
//   const recipesHTML = listRecipes
//     .map((recipe) => `
//       <div class="js-recipes-grid">
//       <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}" width="300">
//       <div>
//       <div class="recipe details">
//         <div class="recipe-title">
//           ${recipe.title}
//         </div>
//         <div class="recipe-description">
//           ${recipe.description}
//         </div>
//         <div class="recipe-ingredients">
//           ${recipe.ingredients}
//         </div>
//     `)
//     .join('');
//     const recipesGrid = document.querySelector('.js-recipes-grid');
//     recipesGrid.innerHTML = recipesHTML;
//     console.log(renderRecipes)
    
//     console.log(renderRecipes());
//   }

  

// import recipes from recipes

// renderRecipes(recipes)

