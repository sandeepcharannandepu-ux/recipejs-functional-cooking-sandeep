// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry"
    },
    {
    id: 3,
    title: "Paneer Butter Masala",
    time: 35,
    difficulty: "easy",
    description: "Soft paneer cubes cooked in a rich buttery tomato gravy.",
    category: "curry"
},
{
    id: 4,
    title: "Mutton Biryani",
    time: 90,
    difficulty: "hard",
    description: "Fragrant basmati rice cooked with spicy mutton and aromatic spices.",
    category: "rice"
},
{
    id: 5,
    title: "Chicken Fried Rice",
    time: 25,
    difficulty: "easy",
    description: "Stir-fried rice with chicken, veggies, and savory sauces.",
    category: "rice"
},
{
    id: 6,
    title: "Veg Manchurian",
    time: 40,
    difficulty: "medium",
    description: "Crispy vegetable balls tossed in spicy Indo-Chinese sauce.",
    category: "snack"
},
{
    id: 7,
    title: "Masala Dosa",
    time: 30,
    difficulty: "medium",
    description: "Crispy dosa filled with spiced potato masala served with chutney.",
    category: "breakfast"
},
{
    id: 8,
    title: "Margherita Pizza",
    time: 60,
    difficulty: "medium",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    category: "pizza"
}
// TODO: Add 6 more recipe objects following the same structure
];

const recipeContainer = document.querySelector('#recipe-container');

// Function to create HTML for a single recipe card

const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};
// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    
    recipeContainer.innerHTML = recipeCardsHTML;
};
renderRecipes(recipes);